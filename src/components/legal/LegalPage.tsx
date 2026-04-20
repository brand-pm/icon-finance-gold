import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface LegalSection {
  heading: string;
  body: ReactNode;
}

interface LegalPageProps {
  label: string;
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

const LegalPage = ({ label, title, lastUpdated, sections }: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-offwhite">
      <Header />

      {/* Hero */}
      <section
        className="relative pt-36 pb-20 md:pt-44 md:pb-24"
        style={{ backgroundColor: "#0F162D" }}
      >
        <div className="container-main text-center">
          <p
            className="uppercase tracking-[0.28em] text-[12px] mb-5"
            style={{ color: "#E0A776" }}
          >
            {label}
          </p>
          <h1
            className="font-light leading-tight"
            style={{ color: "#E0A776", fontSize: "clamp(34px, 5vw, 52px)" }}
          >
            {title}
          </h1>
          <p className="text-slate text-sm mt-5">{lastUpdated}</p>
        </div>
      </section>

      {/* Body */}
      <section style={{ backgroundColor: "#FAFAFA" }}>
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "720px", paddingTop: "80px", paddingBottom: "80px" }}
        >
          {sections.map((section, idx) => (
            <div key={idx} className={idx === 0 ? "" : "mt-12"}>
              <h2
                className="font-medium mb-5"
                style={{ color: "#E0A776", fontSize: "22px", lineHeight: 1.4 }}
              >
                {section.heading}
              </h2>
              <div
                className="legal-body"
                style={{ color: "#33363D", fontSize: "16px", lineHeight: 1.8 }}
              >
                {section.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalPage;
