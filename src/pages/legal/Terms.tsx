import LegalPage from "../../components/legal/LegalPage";
import Seo from "../../components/Seo";

const Para = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 last:mb-0 whitespace-pre-line">{children}</p>
);

const Terms = () => {
  return (
    <>
      <Seo
        title="Terms and Conditions | Icon Finance"
        description="Terms governing the use of the Icon Finance website."
      />
      <LegalPage
        label="LEGAL"
        title="Terms and Conditions"
        lastUpdated="Last updated: April 2025"
        sections={[
          {
            heading: "1. About This Website",
            body: (
              <Para>
                This website is operated by Icon Finance, a financial advisory firm with its registered office at ul. Złota 59, 00-120 Warsaw, Poland. By accessing and using this website, you agree to be bound by these Terms and Conditions.
              </Para>
            ),
          },
          {
            heading: "2. Information Only — Not Financial Advice",
            body: (
              <>
                <Para>
                  The content published on this website is provided for general informational purposes only. Nothing on this website constitutes financial advice, investment advice, legal advice, or any other professional advice.
                </Para>
                <Para>
                  All investment involves risk. The value of investments and the income from them may fall as well as rise. Past performance is not a reliable indicator of future results.
                </Para>
                <Para>
                  Any specific advisory relationship with Icon Finance is governed by a separate engagement letter and service agreement, not by these Terms.
                </Para>
              </>
            ),
          },
          {
            heading: "3. No Offer or Solicitation",
            body: (
              <Para>
                Nothing on this website constitutes an offer to provide services or a solicitation to invest in any financial instrument or strategy. Services described on this website are available only in jurisdictions where Icon Finance is permitted to operate and to clients who meet applicable eligibility criteria.
              </Para>
            ),
          },
          {
            heading: "4. Intellectual Property",
            body: (
              <Para>
                All content on this website — including text, graphics, logos, and design — is the property of Icon Finance or its licensors and is protected by applicable intellectual property law. You may not reproduce, distribute, or use any content from this website without our express written consent.
              </Para>
            ),
          },
          {
            heading: "5. Third-Party Links",
            body: (
              <Para>
                This website may contain links to third-party websites. These links are provided for convenience only. Icon Finance does not endorse, control, or accept responsibility for the content of any third-party website.
              </Para>
            ),
          },
          {
            heading: "6. Limitation of Liability",
            body: (
              <>
                <Para>
                  To the fullest extent permitted by law, Icon Finance shall not be liable for any direct, indirect, or consequential loss arising from your use of, or inability to use, this website or any content on it.
                </Para>
                <Para>
                  We do not guarantee that this website will be available at all times or free from errors or viruses.
                </Para>
              </>
            ),
          },
          {
            heading: "7. Governing Law",
            body: (
              <Para>
                These Terms and Conditions are governed by the laws of Poland. Any disputes arising in connection with this website shall be subject to the exclusive jurisdiction of the courts of Warsaw, Poland.
              </Para>
            ),
          },
          {
            heading: "8. Changes to These Terms",
            body: (
              <Para>
                We reserve the right to update these Terms at any time. The current version will always be published on this page. Continued use of the website following any update constitutes acceptance of the revised Terms.
              </Para>
            ),
          },
          {
            heading: "9. Contact",
            body: (
              <Para>
                For any questions regarding these Terms and Conditions, please contact us at{" "}
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

export default Terms;
