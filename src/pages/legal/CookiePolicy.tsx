import LegalPage from "../../components/legal/LegalPage";
import { Helmet } from "react-helmet-async";

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

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Icon Finance</title>
        <meta name="description" content="How Icon Finance uses cookies and similar technologies on its website." />
      </Helmet>
      <LegalPage
        label="LEGAL"
        title="Cookie Policy"
        lastUpdated="Last updated: April 2025"
        sections={[
          {
            heading: "1. What Are Cookies",
            body: (
              <Para>
                Cookies are small text files placed on your device when you visit a website. They allow the website to recognise your device and remember certain information about your visit - such as your language preference or whether you have previously accepted our cookie notice.
              </Para>
            ),
          },
          {
            heading: "2. How We Use Cookies",
            body: (
              <>
                <Para>Icon Finance uses cookies for the following purposes:</Para>
                <Bullets
                  items={[
                    <><strong>Essential cookies:</strong> required for the website to function correctly. These cannot be disabled without affecting site functionality.</>,
                    <><strong>Analytics cookies:</strong> we use Google Analytics 4 to understand how visitors interact with our website. Data is aggregated and anonymised - we do not identify individual visitors.</>,
                    <><strong>Preference cookies:</strong> to remember your language selection and other interface preferences.</>,
                  ]}
                />
              </>
            ),
          },
          {
            heading: "3. Cookies We Use",
            body: (
              <>
                <Para>The following cookies may be set when you visit our website:</Para>
                <Bullets
                  items={[
                    <><strong>_ga / _ga_*</strong> - Google Analytics, session and user tracking (2 years)</>,
                    <><strong>_gid</strong> - Google Analytics, distinguishes users (24 hours)</>,
                    <><strong>i18next</strong> - language preference selected by user (session)</>,
                    <><strong>cookieConsent</strong> - records whether you have accepted our cookie policy (1 year)</>,
                  ]}
                />
              </>
            ),
          },
          {
            heading: "4. Managing Cookies",
            body: (
              <>
                <Para>
                  You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of this website.
                </Para>
                <Para>
                  For more information on managing cookies, visit:{" "}
                  <a
                    href="https://allaboutcookies.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    allaboutcookies.org
                  </a>
                </Para>
                <Para>
                  To opt out of Google Analytics tracking, visit:{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    tools.google.com/dlpage/gaoptout
                  </a>
                </Para>
              </>
            ),
          },
          {
            heading: "5. Changes to This Policy",
            body: (
              <Para>
                We may update this Cookie Policy as our website and applicable law evolve. The current version will always be available on this page.
              </Para>
            ),
          },
          {
            heading: "6. Contact",
            body: (
              <Para>
                For any questions regarding our use of cookies, please contact us at{" "}
                <a href="mailto:info@iconfinance.io" className="text-gold hover:underline">
                  info@iconfinance.io
                </a>
              </Para>
            ),
          },
        ]}
      />
    </>
  );
};

export default CookiePolicy;
