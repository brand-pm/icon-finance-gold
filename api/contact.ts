import { Resend } from "resend";

/**
 * POST /api/contact
 * Vercel native serverless function. Receives a contact form submission,
 * applies honeypot + rate limiting + server-side validation, then sends
 * an internal notification email via Resend.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory rate limiter (per-IP, 3 requests / 60s).
// NOTE: resets on serverless cold start. Acceptable for low (luxury) volume.
// Migrate to Upstash Redis if lead flow grows.
type RateEntry = { count: number; resetAt: number };
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60_000;
const rateMap: Map<string, RateEntry> = (globalThis as any).__contactRateMap ?? new Map();
(globalThis as any).__contactRateMap = rateMap;

function getClientIp(headers: Record<string, string | string[] | undefined>): string {
  const fwd = headers["x-forwarded-for"];
  if (typeof fwd === "string") return fwd.split(",")[0].trim();
  if (Array.isArray(fwd) && fwd.length) return fwd[0].split(",")[0].trim();
  const real = headers["x-real-ip"];
  if (typeof real === "string") return real;
  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count += 1;
  return false;
}

function esc(v: unknown): string {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, error: "Method not allowed" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      res.status(400).json({ success: false, error: "Invalid JSON body" });
      return;
    }
  }
  body = body || {};

  const {
    name,
    email,
    phone,
    descriptor,
    primaryInterest,
    message,
    consent,
    source,
    website,
  } = body;

  // Honeypot: silently succeed without sending.
  if (typeof website === "string" && website !== "") {
    res.status(200).json({ success: true });
    return;
  }

  // Rate limit.
  const ip = getClientIp(req.headers || {});
  if (isRateLimited(ip)) {
    res.status(429).json({ success: false, error: "Too many requests" });
    return;
  }

  // Server-side validation.
  const errors: string[] = [];
  if (!name || typeof name !== "string" || !name.trim()) errors.push("name");
  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) errors.push("email");
  if (!message || typeof message !== "string" || !message.trim()) errors.push("message");
  if (consent !== true) errors.push("consent");
  if (errors.length) {
    res.status(400).json({ success: false, error: `Invalid fields: ${errors.join(", ")}` });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !toEmail || !fromEmail) {
    res.status(500).json({ success: false, error: "Email service is not configured" });
    return;
  }

  const src = typeof source === "string" && source ? source : "Unknown";
  const html = `
    <h2>New lead, Icon Finance</h2>
    <p><strong>Source:</strong> ${esc(src)}</p>
    <hr />
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Email:</strong> ${esc(email)}</p>
    <p><strong>Phone:</strong> ${esc(phone) || "—"}</p>
    <p><strong>Descriptor:</strong> ${esc(descriptor) || "—"}</p>
    <p><strong>Primary interest:</strong> ${esc(primaryInterest) || "—"}</p>
    <p><strong>Message:</strong></p>
    <p>${esc(message).replace(/\n/g, "<br />")}</p>
    <hr />
    <p style="color:#888;font-size:12px;">Sent ${new Date().toISOString()} via icon-finance-gold.vercel.app</p>
  `;

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New lead from ${src} — ${name}`,
      html,
    });
    if ((result as any)?.error) {
      res.status(500).json({ success: false, error: "Failed to send email" });
      return;
    }
    res.status(200).json({ success: true });
  } catch {
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
}
