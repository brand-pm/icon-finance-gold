import { useId, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Check, ChevronDown, Loader2 } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

/* ---------------- Types ---------------- */

type DescriptorId = "entrepreneur" | "family" | "postExit" | "relocating" | "other";
type InterestId = "wm" | "fo" | "ma" | "st" | "notSure";

type FieldKey = "name" | "email" | "phone" | "descriptor" | "primaryInterest" | "message" | "consent";

type Errors = Partial<Record<FieldKey, string>>;

type FormData = {
  name: string;
  email: string;
  phone: string;
  descriptor: DescriptorId | "";
  primaryInterest: InterestId | "";
  message: string;
  consent: boolean;
};

export interface ContactFormProps {
  variant?: "panel";
  onSubmit?: (payload: Omit<FormData, "consent">) => Promise<void>;
  heading?: string;
  subheading?: string;
  className?: string;
}

const DESCRIPTOR_IDS: DescriptorId[] = ["entrepreneur", "family", "postExit", "relocating", "other"];
const INTEREST_IDS: InterestId[] = ["wm", "fo", "ma", "st", "notSure"];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d][\d\s\-()]{5,}$/;
const NAME_REGEX = /^[\p{L}][\p{L}\s'\-]+\s+[\p{L}][\p{L}\s'\-]+$/u;

const countDigits = (v: string) => (v.match(/\d/g) || []).length;

/* ---------------- Floating field primitives ---------------- */

const fieldBase =
  "peer w-full px-4 pt-6 pb-2 bg-[rgba(255,255,255,0.06)] border text-white text-base md:text-sm outline-none rounded-xl transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy";
const fieldOk = "border-[rgba(255,255,255,0.15)] focus:border-gold";
const fieldErr = "border-gold/70 focus:border-gold";

function FloatingLabel({
  htmlFor,
  required,
  children,
  hasValue,
  forceFloated = false,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  hasValue: boolean;
  forceFloated?: boolean;
}) {
  const floated = hasValue || forceFloated;
  return (
    <label
      htmlFor={htmlFor}
      className={`pointer-events-none absolute left-4 transition-all duration-200 motion-reduce:transition-none ${
        floated
          ? "top-1.5 text-[10px] tracking-[0.1em] uppercase text-gold"
          : "top-1/2 -translate-y-1/2 text-sm text-white/40"
      } peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:tracking-[0.1em] peer-focus:uppercase peer-focus:text-gold`}
    >
      {children}
      {required && <span className="text-gold ml-0.5">*</span>}
    </label>
  );
}

function ErrorText({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return <p id={id} className="hidden" aria-live="polite" />;
  return (
    <p id={id} className="mt-1.5 text-[11px] text-gold leading-tight" aria-live="polite">
      {msg}
    </p>
  );
}

/* ---------------- Custom Select (Radix) ---------------- */

function CustomSelect<T extends string>({
  id,
  value,
  onChange,
  hasError,
  describedBy,
  options,
  placeholder,
  label,
}: {
  id: string;
  value: T | "";
  onChange: (v: T) => void;
  hasError: boolean;
  describedBy?: string;
  options: { id: T; label: string }[];
  placeholder: string;
  label: string;
}) {
  const hasValue = !!value;
  const selected = options.find((o) => o.id === value);
  return (
    <div className="relative">
      <SelectPrimitive.Root value={value || undefined} onValueChange={(v) => onChange(v as T)}>
        <SelectPrimitive.Trigger
          id={id}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy}
          className={`group peer w-full px-4 pt-6 pb-2 text-left bg-[rgba(255,255,255,0.06)] border rounded-xl text-white text-base md:text-sm outline-none transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy flex items-center justify-between data-[state=open]:border-gold ${
            hasError ? "border-gold/70" : "border-[rgba(255,255,255,0.15)] focus:border-gold"
          }`}
        >
          <SelectPrimitive.Value placeholder=" ">
            {selected ? <span className="text-white">{selected.label}</span> : <span className="text-transparent">.</span>}
          </SelectPrimitive.Value>
          <SelectPrimitive.Icon asChild>
            <ChevronDown
              className="h-4 w-4 text-gold/80 transition-transform duration-200 motion-reduce:transition-none group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-4 transition-all duration-200 motion-reduce:transition-none ${
            hasValue
              ? "top-1.5 text-[10px] tracking-[0.1em] uppercase text-gold"
              : "top-1/2 -translate-y-1/2 text-sm text-white/40"
          } peer-data-[state=open]:top-1.5 peer-data-[state=open]:translate-y-0 peer-data-[state=open]:text-[10px] peer-data-[state=open]:tracking-[0.1em] peer-data-[state=open]:uppercase peer-data-[state=open]:text-gold`}
        >
          {label}
          <span className="text-gold ml-0.5">*</span>
        </label>

        {!hasValue && (
          <span className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 text-sm text-white/30 hidden">
            {placeholder}
          </span>
        )}

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            sideOffset={6}
            className="z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-white/10 bg-navy text-white shadow-2xl animate-in fade-in-0 zoom-in-95 motion-reduce:animate-none"
          >
            <SelectPrimitive.Viewport className="p-1">
              {options.map((opt) => (
                <SelectPrimitive.Item
                  key={opt.id}
                  value={opt.id}
                  className="relative flex cursor-pointer select-none items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/85 outline-none data-[highlighted]:bg-white/[0.06] data-[highlighted]:text-gold data-[state=checked]:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                >
                  <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator>
                    <Check className="h-4 w-4 text-gold" aria-hidden="true" />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  );
}

/* ---------------- Main component ---------------- */

const ContactForm = ({ onSubmit, heading, subheading, className = "" }: ContactFormProps) => {
  const { t } = useTranslation();
  const localize = useLocalizedPath();
  const navigate = useNavigate();
  const location = useLocation();
  const uid = useId().replace(/[:]/g, "");
  const liveRegionRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    descriptor: "",
    primaryInterest: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [submitError, setSubmitError] = useState<string>("");
  const [website, setWebsite] = useState("");

  const detectSource = (): string => {
    const segments = location.pathname.split("/").filter(Boolean);
    const route = segments.slice(1).join("/");
    if (route === "") return "Homepage Contact section";
    if (route === "contact") return "Contact page";
    if (route === "relocation") return `Relocation landing (${(segments[0] || "").toUpperCase()})`;
    return `Other (${location.pathname})`;
  };

  const descriptorOptions = useMemo(
    () => DESCRIPTOR_IDS.map((id) => ({ id, label: t(`contactForm.descriptor.options.${id}`) })),
    [t]
  );
  const interestOptions = useMemo(
    () => INTEREST_IDS.map((id) => ({ id, label: t(`contactForm.primaryInterest.options.${id}`) })),
    [t]
  );

  const validateField = (key: FieldKey, d: FormData = data): string => {
    switch (key) {
      case "name": {
        const v = d.name.trim();
        if (!v) return t("contactForm.errors.nameRequired");
        if (!NAME_REGEX.test(v)) return t("contactForm.errors.nameInvalid");
        return "";
      }
      case "email":
        if (!d.email.trim()) return t("contactForm.errors.emailRequired");
        if (!EMAIL_REGEX.test(d.email.trim())) return t("contactForm.errors.emailInvalid");
        return "";
      case "phone":
        if (!d.phone.trim()) return "";
        if (!PHONE_REGEX.test(d.phone.trim()) || countDigits(d.phone) < 7)
          return t("contactForm.errors.phoneInvalid");
        return "";
      case "descriptor":
        if (!d.descriptor) return t("contactForm.errors.descriptorRequired");
        return "";
      case "primaryInterest":
        if (!d.primaryInterest) return t("contactForm.errors.primaryInterestRequired");
        return "";
      case "message":
        return "";
      case "consent":
        if (!d.consent) return t("contactForm.errors.consentRequired");
        return "";
    }
  };

  const validateAll = (d: FormData): Errors => {
    const out: Errors = {};
    (Object.keys(d) as FieldKey[]).forEach((k) => {
      const m = validateField(k, d);
      if (m) out[k] = m;
    });
    return out;
  };

  const update = <K extends FieldKey>(key: K, value: FormData[K]) => {
    const next = { ...data, [key]: value };
    setData(next);
    if (submitAttempted || touched[key]) {
      const msg = validateField(key, next);
      setErrors((p) => ({ ...p, [key]: msg || undefined }));
    }
  };

  const onBlur = (key: FieldKey) => {
    setTouched((p) => ({ ...p, [key]: true }));
    const msg = validateField(key);
    setErrors((p) => ({ ...p, [key]: msg || undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    const v = validateAll(data);
    setErrors(v);
    if (Object.keys(v).length) {
      const firstErr = Object.values(v)[0];
      if (firstErr && liveRegionRef.current) liveRegionRef.current.textContent = firstErr;
      const order: FieldKey[] = ["name", "email", "phone", "descriptor", "primaryInterest", "message", "consent"];
      const firstKey = order.find((k) => v[k]);
      if (firstKey) {
        const el = document.getElementById(`${uid}-${firstKey}`);
        el?.focus();
      }
      return;
    }

    setStatus("loading");
    try {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        descriptor: data.descriptor as DescriptorId,
        primaryInterest: data.primaryInterest as InterestId,
        message: data.message,
      };
      if (onSubmit) {
        await onSubmit(payload);
      } else {
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus("success");
      navigate(localize("/thank-you"));
      return;
    } catch (err) {
      setStatus("idle");
      toast.error(t("contactForm.states.errorToast"), {
        duration: 8000,
        closeButton: true,
        className: "!border-gold/40",
      });
    }
  };

  const reset = () => {
    setData({ name: "", email: "", phone: "", descriptor: "", primaryInterest: "", message: "", consent: false });
    setErrors({});
    setTouched({});
    setSubmitAttempted(false);
    setStatus("idle");
  };

  const consentText = t("contactForm.consent");
  const consentMatch = consentText.match(/^(.*)\[([^\]]+)\]\(\/privacy-policy\)(.*)$/);

  const panelCls = `bg-navy p-10 rounded-2xl ${className}`;

  if (status === "success") {
    return (
      <div data-radius-block className={`${panelCls} animate-fade-up motion-reduce:animate-none`} role="status" aria-live="polite">
        <div className="flex flex-col items-center text-center py-6">
          <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mb-6">
            <Check className="w-8 h-8 text-gold" aria-hidden="true" strokeWidth={1.5} />
          </div>
          <h3 className="text-gold text-[28px] font-light mb-3">{t("contactForm.states.successHeading")}</h3>
          <div className="gold-separator mb-5">
            <div className="dot" /><div className="dot-lg" /><div className="dot" />
          </div>
          <p className="text-white/70 text-sm md:text-base max-w-md mb-8 leading-relaxed">
            {t("contactForm.states.successBody")}
          </p>
          <button
            type="button"
            onClick={reset}
            className="btn-outline-gold px-6 py-3 text-[12px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            {t("contactForm.states.sendAnother")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div data-radius-block className={panelCls}>
      {heading && <h3 className="text-gold text-[28px] font-light mb-2">{heading}</h3>}
      {subheading && <p className="text-white/70 text-sm mb-3">{subheading}</p>}
      <p className="text-white/50 text-[11px] mb-6">{t("contactForm.requiredNote")}</p>

      <div ref={liveRegionRef} role="status" aria-live="polite" className="sr-only" />

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="relative">
          <input
            id={`${uid}-name`}
            type="text"
            maxLength={160}
            autoComplete="name"
            spellCheck={false}
            data-gramm="false"
            aria-invalid={!!errors.name || undefined}
            aria-describedby={`${uid}-name-err`}
            placeholder=" "
            className={`${fieldBase} ${errors.name ? fieldErr : fieldOk}`}
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => onBlur("name")}
          />
          <FloatingLabel htmlFor={`${uid}-name`} required hasValue={!!data.name}>
            {t("contactForm.labels.name")}
          </FloatingLabel>
          <ErrorText id={`${uid}-name-err`} msg={errors.name} />
        </div>

        <div className="relative">
          <input
            id={`${uid}-email`}
            type="email"
            maxLength={255}
            autoComplete="email"
            spellCheck={false}
            data-gramm="false"
            aria-invalid={!!errors.email || undefined}
            aria-describedby={`${uid}-email-err`}
            placeholder=" "
            className={`${fieldBase} ${errors.email ? fieldErr : fieldOk}`}
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => onBlur("email")}
          />
          <FloatingLabel htmlFor={`${uid}-email`} required hasValue={!!data.email}>
            {t("contactForm.labels.email")}
          </FloatingLabel>
          <ErrorText id={`${uid}-email-err`} msg={errors.email} />
        </div>

        <div className="relative">
          <input
            id={`${uid}-phone`}
            type="tel"
            maxLength={40}
            autoComplete="tel"
            spellCheck={false}
            data-gramm="false"
            aria-invalid={!!errors.phone || undefined}
            aria-describedby={`${uid}-phone-err`}
            placeholder=" "
            className={`${fieldBase} ${errors.phone ? fieldErr : fieldOk}`}
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            onBlur={() => onBlur("phone")}
          />
          <FloatingLabel htmlFor={`${uid}-phone`} hasValue={!!data.phone}>
            {t("contactForm.labels.phone")}
          </FloatingLabel>
          <ErrorText id={`${uid}-phone-err`} msg={errors.phone} />
        </div>

        <div>
          <CustomSelect<DescriptorId>
            id={`${uid}-descriptor`}
            value={data.descriptor}
            onChange={(v) => {
              update("descriptor", v);
              setTouched((p) => ({ ...p, descriptor: true }));
            }}
            hasError={!!errors.descriptor}
            describedBy={`${uid}-descriptor-err`}
            options={descriptorOptions}
            placeholder={t("contactForm.descriptor.placeholder")}
            label={t("contactForm.descriptor.label")}
          />
          <ErrorText id={`${uid}-descriptor-err`} msg={errors.descriptor} />
        </div>

        <div>
          <CustomSelect<InterestId>
            id={`${uid}-primaryInterest`}
            value={data.primaryInterest}
            onChange={(v) => {
              update("primaryInterest", v);
              setTouched((p) => ({ ...p, primaryInterest: true }));
            }}
            hasError={!!errors.primaryInterest}
            describedBy={`${uid}-primaryInterest-err`}
            options={interestOptions}
            placeholder={t("contactForm.primaryInterest.placeholder")}
            label={t("contactForm.primaryInterest.label")}
          />
          <ErrorText id={`${uid}-primaryInterest-err`} msg={errors.primaryInterest} />
        </div>

        <div className="relative">
          <textarea
            id={`${uid}-message`}
            rows={4}
            maxLength={2000}
            spellCheck={false}
            data-gramm="false"
            data-gramm_editor="false"
            data-enable-grammarly="false"
            aria-describedby={`${uid}-message-err`}
            placeholder={t("contactForm.labels.messagePlaceholder")}
            className={`${fieldBase} ${fieldOk} resize-none placeholder:text-white/30`}
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            onBlur={() => onBlur("message")}
          />
          <FloatingLabel htmlFor={`${uid}-message`} hasValue={!!data.message} forceFloated>
            {t("contactForm.labels.message")}
          </FloatingLabel>
          <ErrorText id={`${uid}-message-err`} msg={errors.message} />
        </div>

        <div className="pt-1">
          <label className="flex items-start gap-3 cursor-pointer select-none group">
            <input
              id={`${uid}-consent`}
              type="checkbox"
              aria-invalid={!!errors.consent || undefined}
              aria-describedby={`${uid}-consent-err`}
              checked={data.consent}
              onChange={(e) => {
                update("consent", e.target.checked);
                setTouched((p) => ({ ...p, consent: true }));
              }}
              className="mt-0.5 h-4 w-4 shrink-0 appearance-none rounded-sm border border-white/30 bg-transparent checked:bg-gold checked:border-gold cursor-pointer relative
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy
                checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-navy checked:after:text-[11px] checked:after:font-bold"
            />
            <span className="text-white/70 text-xs leading-relaxed">
              {consentMatch ? (
                <>
                  {consentMatch[1]}
                  <Link
                    to={localize("/privacy-policy")}
                    className="text-gold hover:underline focus-visible:outline-none focus-visible:underline focus-visible:decoration-2"
                  >
                    {consentMatch[2]}
                  </Link>
                  {consentMatch[3]}
                </>
              ) : (
                consentText
              )}
              <span className="text-gold ml-0.5">*</span>
            </span>
          </label>
          <ErrorText id={`${uid}-consent-err`} msg={errors.consent} />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || !data.consent}
          aria-disabled={status === "loading" || !data.consent}
          className="w-full btn-gold py-4 text-[13px] font-medium inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy motion-reduce:transition-none"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin motion-reduce:hidden" aria-hidden="true" />
              {t("contactForm.states.sending")}
            </>
          ) : (
            t("contactForm.labels.send")
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
