import { ContactForm } from "@/components/ui/ContactForm";
import { Card } from "@/components/ui/Card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Civic Safety Advisors | Branford, CT | Serving CT, NY, MA, RI",
  description:
    "Contact Civic Safety Advisors in Branford, Connecticut at (203) 676-8193. Serving mission-driven organizations throughout Connecticut, New York, Massachusetts, and Rhode Island. Schedule a free consultation.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Ready to discuss your organization's security needs? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-ink-900">Send Us a Message</h2>
              <p className="mt-2 text-base text-slate-600">
                Fill out the form below and we'll get back to you within one business
                day.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </Card>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-semibold text-ink-900">Get in Touch</h3>
              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-brass-600" />
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Phone</p>
                    <p className="mt-1 text-sm text-slate-600">(203) 676-8193</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-brass-600" />
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Email</p>
                    <p className="mt-1 text-sm text-slate-600">
                      info@civicsafetyadvisors.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-brass-600" />
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Location</p>
                    <p className="mt-1 text-sm text-slate-600">
                      Branford, Connecticut
                      <br />
                      Serving clients nationwide
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-ink-900">Office Hours</h3>
              <div className="mt-4 flex gap-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-brass-600" />
                <div>
                  <p className="text-sm text-slate-700">
                    Monday – Friday
                    <br />
                    9:00 AM – 5:00 PM EST
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Consultations available by appointment
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-brass-500/5 border border-brass-500/20">
              <h3 className="text-lg font-semibold text-ink-900">
                Free Initial Consultation
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Not sure where to start? Schedule a complimentary 30-minute call to
                discuss your organization's security needs and learn how we can help.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-ink-900">
                Service Area
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Civic Safety Advisors serves mission-driven organizations throughout
                Connecticut, New York, Massachusetts, and Rhode Island. We also provide
                virtual consultations nationwide and can arrange on-site engagements
                anywhere in the United States upon request.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-ink-900">{faq.question}</h3>
                <p className="mt-2 text-base text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const faqs = [
  {
    question: "How much do your services cost?",
    answer:
      "Our fees vary based on the scope of work, size of your organization, and services needed. We provide detailed proposals after an initial consultation. We're committed to working within nonprofit and public organization budgets.",
  },
  {
    question: "Do you work with organizations outside your local area?",
    answer:
      "Yes! While we prefer on-site assessments when possible, we work with organizations nationwide and can conduct many services remotely or through travel arrangements.",
  },
  {
    question: "How long does a typical assessment take?",
    answer:
      "A comprehensive threat and vulnerability assessment typically takes 2-4 weeks from initial engagement to final report delivery, depending on the size and complexity of your facility.",
  },
  {
    question: "Do you provide ongoing support after the assessment?",
    answer:
      "Absolutely. We believe in long-term partnerships. Many clients retain us for ongoing consultation, periodic reassessments, and training updates.",
  },
];
