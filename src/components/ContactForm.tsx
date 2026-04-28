import { useId, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Check, ChevronDown, Loader2 } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

/* ---------------- Types ---------------- */

type SubjectId = "wm" | "fo" | "st" | "ma" | "ss";

type FieldKey = "firstName" | "lastName" | "email" | "phone" | "subject" | "message" | "consent";

type Errors = Partial<Record<FieldKey, string>>;

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: SubjectId | "";
  message: string;
  consent: boolean;
};

export interface ContactFormProps {
  /** Visual variant. Both render on dark navy panel. */
  variant?: "panel";
  /** Optional onSubmit override. Defaults to a simulated async success. */
  onSubmit?: (payload: Omit<FormData, "consent">) => Promise<void>;
  /** Form heading (gold) */
  heading?: string;
  /** Subheading (slate/white-ish) */
  subheading?: string;
  /** Optional className for the outer panel */
  className?: string;
}

/* ---------------- Validation ---------------- */

const NAME_REGEX = /^[\p{L}\s'\-]+$/u;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d][\d\s\-()]{5,}$/;
const SUBJECT_IDS: SubjectId[] = ["wm", "fo", "st", "ma", "ss"];

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
  return (
    <p
      id={id}
      className="mt-1.5 min-h-[14px] text-[11px] text-gold leading-tight"
      aria-live="polite"
    >
      {msg || ""}
    </p>
  );
}

/* ---------------- Custom Select (Radix) ---------------- */

function SubjectSelect({
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
  value: SubjectId | "";
  onChange: (v: SubjectId) => void;
  hasError: boolean;
  describedBy?: string;
  options: { id: SubjectId; label: string }[];
  placeholder: string;
  label: string;
}) {
  const hasValue = !!value;
  const selected = options.find((o) => o.id === value);
  return (
    <div className="relative">
      <SelectPrimitive.Root value={value || undefined} onValueChange={(v) => onChange(v as SubjectId)}>
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

        {/* Floating label */}
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

        {/* Placeholder hint visible only when empty and not floated */}
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

const ContactForm = ({
  onSubmit,
  heading,
  subheading,
  className = "",
}: ContactFormProps) => {
  const { t } = useTranslation();
  const localize = useLocalizedPath();
  const uid = useId().replace(/[:]/g, "");
  const liveRegionRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const subjectOptions = useMemo(
    () => SUBJECT_IDS.map((id) => ({ id, label: t(`contactForm.subject.options.${id}`) })),
    [t]
  );

  /* Validate one field. Returns error msg or "". */
  const validateField = (key: FieldKey, d: FormData = data): string => {
    switch (key) {
      case "firstName":
        if (!d.firstName.trim()) return t("contactForm.errors.firstNameRequired");
        if (!NAME_REGEX.test(d.firstName.trim())) return t("contactForm.errors.firstNameInvalid");
        return "";
      case "lastName":
        if (!d.lastName.trim()) return t("contactForm.errors.lastNameRequired");
        if (!NAME_REGEX.test(d.lastName.trim())) return t("contactForm.errors.lastNameInvalid");
        return "";
      case "email":
        if (!d.email.trim()) return t("contactForm.errors.emailRequired");
        if (!EMAIL_REGEX.test(d.email.trim())) return t("contactForm.errors.emailInvalid");
        return "";
      case "phone":
        if (!d.phone.trim()) return "";
        if (!PHONE_REGEX.test(d.phone.trim()) || countDigits(d.phone) < 7)
          return t("contactForm.errors.phoneInvalid");
        return "";
      case "subject":
        if (!d.subject) return t("contactForm.errors.subjectRequired");
        return "";
      case "message":
        if (!d.message.trim()) return t("contactForm.errors.messageRequired");
        if (d.message.trim().length < 10) return t("contactForm.errors.messageTooShort");
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

  /* Update + revalidate (only show errors if already attempted/blurred) */
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
      // focus first invalid
      const order: FieldKey[] = ["firstName", "lastName", "email", "phone", "subject", "message", "consent"];
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
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        subject: data.subject as SubjectId,
        message: data.message,
      };
      if (onSubmit) {
        await onSubmit(payload);
      } else {
        // Simulated success for now (no backend wired)
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus("success");
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
    setData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "", consent: false });
    setErrors({});
    setTouched({});
    setSubmitAttempted(false);
    setStatus("idle");
  };

  /* Consent label parsing: "...[Privacy Policy](/privacy-policy)..." */
  const consentText = t("contactForm.consent");
  const consentMatch = consentText.match(/^(.*)\[([^\]]+)\]\(\/privacy-policy\)(.*)$/);

  const panelCls = `bg-navy p-10 rounded-2xl ${className}`;

  /* ---------- Success state ---------- */
  if (status === "success") {
    return (
      <div
        data-radius-block
        className={`${panelCls} animate-fade-up motion-reduce:animate-none`}
        role="status"
        aria-live="polite"
      >
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

  /* ---------- Form ---------- */
  return (
    <div data-radius-block className={panelCls}>
      {heading && <h3 className="text-gold text-[28px] font-light mb-2">{heading}</h3>}
      {subheading && <p className="text-white/70 text-sm mb-3">{subheading}</p>}
      <p className="text-white/50 text-[11px] mb-6">{t("contactForm.requiredNote")}</p>

      {/* SR-only live region for first error after submit */}
      <div ref={liveRegionRef} role="status" aria-live="polite" className="sr-only" />

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <input
              id={`${uid}-firstName`}
              type="text"
              maxLength={80}
              autoComplete="given-name"
              required
              aria-required="true"
              aria-invalid={!!errors.firstName || undefined}
              aria-describedby={`${uid}-firstName-err`}
              placeholder=" "
              className={`${fieldBase} ${errors.firstName ? fieldErr : fieldOk}`}
              value={data.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              onBlur={() => onBlur("firstName")}
            />
            <FloatingLabel htmlFor={`${uid}-firstName`} required hasValue={!!data.firstName}>
              {t("contactForm.labels.firstName")}
            </FloatingLabel>
            <ErrorText id={`${uid}-firstName-err`} msg={errors.firstName} />
          </div>
          <div className="relative">
            <input
              id={`${uid}-lastName`}
              type="text"
              maxLength={80}
              autoComplete="family-name"
              required
              aria-required="true"
              aria-invalid={!!errors.lastName || undefined}
              aria-describedby={`${uid}-lastName-err`}
              placeholder=" "
              className={`${fieldBase} ${errors.lastName ? fieldErr : fieldOk}`}
              value={data.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              onBlur={() => onBlur("lastName")}
            />
            <FloatingLabel htmlFor={`${uid}-lastName`} required hasValue={!!data.lastName}>
              {t("contactForm.labels.lastName")}
            </FloatingLabel>
            <ErrorText id={`${uid}-lastName-err`} msg={errors.lastName} />
          </div>
        </div>

        <div className="relative">
          <input
            id={`${uid}-email`}
            type="email"
            maxLength={255}
            autoComplete="email"
            required
            aria-required="true"
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
          <SubjectSelect
            id={`${uid}-subject`}
            value={data.subject}
            onChange={(v) => {
              update("subject", v);
              setTouched((p) => ({ ...p, subject: true }));
            }}
            hasError={!!errors.subject}
            describedBy={`${uid}-subject-err`}
            options={subjectOptions}
            placeholder={t("contactForm.subject.placeholder")}
            label={t("contactForm.subject.label")}
          />
          <ErrorText id={`${uid}-subject-err`} msg={errors.subject} />
        </div>

        <div className="relative">
          <textarea
            id={`${uid}-message`}
            rows={4}
            maxLength={2000}
            required
            aria-required="true"
            aria-invalid={!!errors.message || undefined}
            aria-describedby={`${uid}-message-err`}
            placeholder=" "
            className={`${fieldBase} ${errors.message ? fieldErr : fieldOk} resize-none`}
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            onBlur={() => onBlur("message")}
          />
          <FloatingLabel htmlFor={`${uid}-message`} required hasValue={!!data.message}>
            {t("contactForm.labels.message")}
          </FloatingLabel>
          <ErrorText id={`${uid}-message-err`} msg={errors.message} />
        </div>

        {/* Consent */}
        <div className="pt-1">
          <label className="flex items-start gap-3 cursor-pointer select-none group">
            <input
              id={`${uid}-consent`}
              type="checkbox"
              required
              aria-required="true"
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
          disabled={status === "loading"}
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
