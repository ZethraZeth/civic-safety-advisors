export const metadata = {
  title: "Terms of Service | Civic Safety Advisors",
  description: "Terms of Service for Civic Safety Advisors",
};

export default function TermsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-ink-900">
            Terms of Service
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
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the Civic Safety Advisors website and services, you
              agree to be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our website or services.
            </p>

            <h2>Service Descriptions</h2>
            <p>
              Civic Safety Advisors provides security consulting, assessment, training,
              and advisory services to houses of worship, educational institutions,
              nonprofits, and public organizations. Specific service details, deliverables,
              and timelines are defined in individual service agreements.
            </p>

            <h2>Client Responsibilities</h2>
            <p>
              Clients engaging our services agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information about their organization</li>
              <li>Grant necessary access to facilities and personnel for assessments</li>
              <li>Cooperate with our consultants during the engagement</li>
              <li>
                Implement recommendations at their own discretion and responsibility
              </li>
              <li>Maintain confidentiality of proprietary methodologies and reports</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              Our security assessments and recommendations are based on best practices and
              professional judgment. However, no security system or plan can guarantee
              complete protection against all threats. Civic Safety Advisors is not liable
              for:
            </p>
            <ul>
              <li>Security incidents that occur despite implemented recommendations</li>
              <li>
                Client decisions to implement, modify, or not implement our recommendations
              </li>
              <li>
                Changes in threat environment or circumstances after service delivery
              </li>
              <li>
                Third-party actions or failures of third-party security systems
              </li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All materials, methodologies, templates, and content provided by Civic Safety
              Advisors remain our intellectual property. Clients receive a limited license
              to use delivered materials for their organization's internal security
              purposes only. Materials may not be reproduced, distributed, or sold without
              written permission.
            </p>

            <h2>Confidentiality</h2>
            <p>
              We treat all client information, assessment results, and organizational
              details as strictly confidential. We will not disclose client information
              without written permission, except as required by law.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Payment terms are specified in individual service agreements. Services may
              require payment in advance, deposits, or milestone-based billing depending on
              the engagement.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from our services will first be addressed through good
              faith negotiation. If resolution cannot be reached, disputes will be subject
              to binding arbitration in accordance with applicable state laws.
            </p>

            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our
              website and services constitutes acceptance of updated terms. Material
              changes will be communicated to active clients.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact:
            </p>
            <p>
              <strong>Civic Safety Advisors</strong><br />
              <strong>Email:</strong> info@civicsafetyadvisors.com<br />
              <strong>Phone:</strong> [XXX-XXX-XXXX]
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
