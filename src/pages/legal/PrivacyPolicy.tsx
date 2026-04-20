import LegalPage from "../../components/legal/LegalPage";
import Seo from "../../components/Seo";

const Para = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 last:mb-0 whitespace-pre-line">{children}</p>
);

const Bullets = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc pl-6 space-y-2 mb-4 last:mb-0">
    {items.map((it, i) => (
      <li key={i}>{it}</li>
    ))}
  </ul>
);

const PrivacyPolicy = () => {
  return (
    <>
      <Seo
        title="Privacy Policy | Icon Finance"
        description="How Icon Finance collects, uses, and protects your personal data under GDPR."
      />
      <LegalPage
        label="LEGAL"
        title="Privacy Policy"
        lastUpdated="Last updated: April 2025"
        sections={[
          {
            heading: "1. Who We Are",
            body: (
              <>
                <Para>
                  Icon Finance is a wealth management and financial advisory firm incorporated in Poland, with its registered office at ul. Złota 59, 00-120 Warsaw, Poland. We are the data controller for all personal data collected through this website and in the course of our advisory relationships.
                </Para>
                <Para>
                  For all data protection enquiries, please contact us at:{" "}
                  <a href="mailto:info@iconfinance.io" className="text-gold hover:underline">
                    info@iconfinance.io
                  </a>
                </Para>
              </>
            ),
          },
          {
            heading: "2. What Data We Collect",
            body: (
              <>
                <Para>We may collect and process the following categories of personal data:</Para>
                <Bullets
                  items={[
                    <><strong>Identity data:</strong> name, title, date of birth</>,
                    <><strong>Contact data:</strong> email address, telephone number, postal address</>,
                    <><strong>Financial data:</strong> information about your assets, investment objectives, and financial situation, provided voluntarily in the course of enquiry or onboarding</>,
                    <><strong>Technical data:</strong> IP address, browser type, pages visited, time spent on pages</>,
                    <><strong>Communication data:</strong> correspondence sent to us via forms, email, or other channels</>,
                  ]}
                />
              </>
            ),
          },
          {
            heading: "3. How We Use Your Data",
            body: (
              <>
                <Para>We process your personal data for the following purposes:</Para>
                <Bullets
                  items={[
                    "To respond to enquiries submitted via our contact forms or email",
                    "To provide wealth management, family office, and advisory services under a contractual relationship",
                    "To comply with legal and regulatory obligations applicable to financial services firms in Poland and the European Union",
                    "To send relevant market insights and publications, where you have provided consent",
                    "To improve our website and user experience through aggregated analytics data",
                  ]}
                />
              </>
            ),
          },
          {
            heading: "4. Legal Basis for Processing",
            body: (
              <>
                <Para>
                  We process personal data on the following legal bases under the General Data Protection Regulation (GDPR):
                </Para>
                <Bullets
                  items={[
                    <><strong>Contractual necessity:</strong> where processing is required to perform services you have requested</>,
                    <><strong>Legal obligation:</strong> where we are required to process data to comply with applicable law</>,
                    <><strong>Legitimate interests:</strong> where processing serves our legitimate business interests and does not override your rights</>,
                    <><strong>Consent:</strong> where you have explicitly agreed to the processing of your data for a specific purpose</>,
                  ]}
                />
              </>
            ),
          },
          {
            heading: "5. Data Retention",
            body: (
              <>
                <Para>
                  We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law.
                </Para>
                <Para>
                  Client data related to advisory mandates is typically retained for a minimum of 5 years following the end of the relationship, in accordance with Polish financial services regulations. Enquiry data from non-clients is retained for up to 24 months.
                </Para>
              </>
            ),
          },
          {
            heading: "6. Data Sharing",
            body: (
              <>
                <Para>
                  We do not sell, rent, or trade your personal data to third parties. We may share data with:
                </Para>
                <Bullets
                  items={[
                    "Professional advisors and service providers engaged to support our operations (e.g., legal counsel, IT providers), bound by confidentiality obligations",
                    "Regulatory authorities, where disclosure is required by law",
                    "Successor entities in the event of a business reorganisation, subject to equivalent data protection commitments",
                  ]}
                />
              </>
            ),
          },
          {
            heading: "7. Your Rights",
            body: (
              <>
                <Para>
                  Under the GDPR, you have the following rights in relation to your personal data:
                </Para>
                <Bullets
                  items={[
                    <><strong>Right of access:</strong> to request a copy of the data we hold about you</>,
                    <><strong>Right to rectification:</strong> to correct inaccurate or incomplete data</>,
                    <><strong>Right to erasure:</strong> to request deletion of your data where it is no longer necessary</>,
                    <><strong>Right to restrict processing:</strong> to limit how we use your data in certain circumstances</>,
                    <><strong>Right to data portability:</strong> to receive your data in a structured, machine-readable format</>,
                    <><strong>Right to object:</strong> to processing based on legitimate interests</>,
                    <><strong>Right to withdraw consent:</strong> at any time, where processing is based on consent</>,
                  ]}
                />
                <Para>
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:info@iconfinance.io" className="text-gold hover:underline">
                    info@iconfinance.io
                  </a>
                  . We will respond within 30 days. You also have the right to lodge a complaint with the Polish data protection authority (UODO) at{" "}
                  <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                    uodo.gov.pl
                  </a>
                  .
                </Para>
              </>
            ),
          },
          {
            heading: "8. International Transfers",
            body: (
              <Para>
                Where we transfer personal data outside the European Economic Area, we ensure appropriate safeguards are in place in accordance with GDPR requirements, including standard contractual clauses approved by the European Commission.
              </Para>
            ),
          },
          {
            heading: "9. Security",
            body: (
              <Para>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. Access to client data is restricted to authorised personnel only.
              </Para>
            ),
          },
          {
            heading: "10. Changes to This Policy",
            body: (
              <Para>
                We may update this Privacy Policy from time to time. The most current version will always be available on this page. Material changes will be communicated to active clients directly.
              </Para>
            ),
          },
        ]}
      />
    </>
  );
};

export default PrivacyPolicy;
