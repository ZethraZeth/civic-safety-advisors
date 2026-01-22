export const metadata = {
  title: "Privacy Policy | Civic Safety Advisors",
  description: "Privacy Policy for Civic Safety Advisors",
};

export default function PrivacyPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-ink-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <article className="prose prose-slate prose-lg max-w-none">
            <h2>Information We Collect</h2>
            <p>
              When you contact us through our website or request our services, we may
              collect personal information including:
            </p>
            <ul>
              <li>Name and organization name</li>
              <li>Email address and phone number</li>
              <li>Organization type and security needs</li>
              <li>Any other information you choose to provide in your message</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul>
              <li>Respond to your inquiries and consultation requests</li>
              <li>Provide security consulting services</li>
              <li>
                Communicate with you about services, assessments, and training programs
              </li>
              <li>
                Improve our services and understand our clients' needs
              </li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to
              third parties. We may share information with trusted service providers who
              assist us in operating our website or conducting our business, provided
              those parties agree to keep this information confidential.
            </p>

            <h2>Data Protection</h2>
            <p>
              We implement appropriate technical and organizational security measures to
              protect your personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience. You can choose to
              disable cookies through your browser settings, though this may limit
              functionality.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your
              personal information, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@civicsafetyadvisors.com<br />
              <strong>Phone:</strong> [XXX-XXX-XXXX]
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              any changes by posting the new Privacy Policy on this page with an updated
              "Last updated" date.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
