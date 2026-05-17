import { useState, type RefObject } from "react";
import { useTranslation } from "react-i18next";
import { Loader2, Check } from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  ctaRef?: RefObject<HTMLElement>;
}

const NewsletterCta = ({ ctaRef }: Props) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = (v: string) => (EMAIL_REGEX.test(v.trim()) ? null : t("insights.ctaSection.errorInvalid"));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const err = validate(email);
    setError(err);
    if (err) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 500));
    setStatus("success");
  };

  const showErr = (touched || submitted) && !!error;

  return (
    <section className="bg-navy py-20" ref={ctaRef}>
      <div className="container-main text-center opacity-0 animate-fade-up">
        <h2 className="text-white font-light mb-6" style={{ fontSize: "clamp(28px,4.5vw,42px)" }}>
          {t("insights.ctaSection.title")}
        </h2>
        <div className="gold-separator mb-8">
          <div className="dot" /><div className="dot-lg" /><div className="dot" />
        </div>
        <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {t("insights.ctaSection.description")}
        </p>

        {status === "success" ? (
          <div className="inline-flex items-center gap-3 text-gold text-base" role="status" aria-live="polite">
            <Check className="w-5 h-5" aria-hidden="true" />
            {t("insights.ctaSection.successMessage")}
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (touched || submitted) setError(validate(e.target.value));
                  }}
                  onBlur={() => {
                    setTouched(true);
                    setError(validate(email));
                  }}
                  placeholder={t("insights.ctaSection.placeholder")}
                  aria-invalid={showErr || undefined}
                  aria-describedby="newsletter-err"
                  spellCheck={false}
                  data-gramm="false"
                  className={`w-full bg-white/[0.06] border rounded-xl px-5 py-4 text-white placeholder:text-white/40 text-sm outline-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy ${
                    showErr ? "border-gold/70" : "border-white/15 focus:border-gold"
                  }`}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-gold px-8 py-4 text-[13px] font-medium inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                ) : (
                  t("insights.ctaSection.button")
                )}
              </button>
            </div>
            <p id="newsletter-err" className={`mt-3 text-[12px] text-gold text-left sm:text-center min-h-[1em] ${showErr ? "" : "invisible"}`} aria-live="polite">
              {error}
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterCta;
