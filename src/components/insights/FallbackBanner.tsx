import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Props {
  enSlug: string;
}

export const FallbackBanner = ({ enSlug }: Props) => {
  const { t } = useTranslation();
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="bg-navy border-l-4 border-gold relative">
      <div className="container-main py-5 md:py-6 pr-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-offwhite text-[14px] md:text-[15px] leading-relaxed">
            {t("insights.fallbackBanner.message")}
          </p>
          <Link
            to={`/en/insights/${enSlug}`}
            className="inline-flex items-center gap-2 text-gold text-[12px] uppercase tracking-[0.14em] font-medium hover:text-white transition-colors whitespace-nowrap"
          >
            {t("insights.fallbackBanner.cta")} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="absolute top-3 right-3 text-offwhite/60 hover:text-gold transition-colors"
      >
        <X size={18} />
      </button>
    </div>
  );
};
