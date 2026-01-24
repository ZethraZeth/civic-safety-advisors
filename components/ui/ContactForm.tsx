"use client";

import { useState } from "react";
import { Button } from "./Button";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    organizationType: "",
    inquiryType: "",
    message: "",
    contactMethod: "email",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.organization.trim()) {
      newErrors.organization = "Organization name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formState.organizationType) {
      newErrors.organizationType = "Please select an organization type";
    }

    if (!formState.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xeeanbeb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({
          name: "",
          organization: "",
          email: "",
          phone: "",
          organizationType: "",
          inquiryType: "",
          message: "",
          contactMethod: "email",
        });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-ink-900">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-ink-900 shadow-sm focus:border-brass-500 focus:ring-brass-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Organization */}
      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-semibold text-ink-900"
        >
          Organization Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formState.organization}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-ink-900 shadow-sm focus:border-brass-500 focus:ring-brass-500"
        />
        {errors.organization && (
          <p className="mt-1 text-sm text-red-600">{errors.organization}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-ink-900">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-ink-900 shadow-sm focus:border-brass-500 focus:ring-brass-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-ink-900">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-ink-900 shadow-sm focus:border-brass-500 focus:ring-brass-500"
        />
      </div>

      {/* Organization Type */}
      <div>
        <label
          htmlFor="organizationType"
          className="block text-sm font-semibold text-ink-900"
        >
          Organization Type <span className="text-red-600">*</span>
        </label>
        <select
          id="organizationType"
          name="organizationType"
          value={formState.organizationType}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-ink-900 shadow-sm focus:border-brass-500 focus:ring-brass-500"
        >
          <option value="">Select one...</option>
          <option value="house-of-worship">House of Worship</option>
          <option value="school">School/Educational Institution</option>
          <option value="nonprofit">Nonprofit/Public Organization</option>
          <option value="other">Other</option>
        </select>
        {errors.organizationType && (
          <p className="mt-1 text-sm text-red-600">{errors.organizationType}</p>
        )}
      </div>

      {/* Inquiry Type */}
      <div>
        <label
          htmlFor="inquiryType"
          className="block text-sm font-semibold text-ink-900"
        >
          How Can We Help? <span className="text-red-600">*</span>
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formState.inquiryType}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-ink-900 shadow-sm focus:border-brass-500 focus:ring-brass-500"
        >
          <option value="">Select one...</option>
          <option value="general">General Inquiry</option>
          <option value="consultation">Request Consultation</option>
          <option value="training">Training Inquiry</option>
          <option value="other">Other</option>
        </select>
        {errors.inquiryType && (
          <p className="mt-1 text-sm text-red-600">{errors.inquiryType}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink-900">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formState.message}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-ink-900 shadow-sm focus:border-brass-500 focus:ring-brass-500"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Contact Method */}
      <div>
        <label className="block text-sm font-semibold text-ink-900">
          Preferred Contact Method
        </label>
        <div className="mt-3 space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="contact-email"
              name="contactMethod"
              value="email"
              checked={formState.contactMethod === "email"}
              onChange={handleChange}
              className="h-4 w-4 border-slate-300 text-brass-600 focus:ring-brass-500"
            />
            <label htmlFor="contact-email" className="ml-2 text-sm text-slate-700">
              Email
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="contact-phone"
              name="contactMethod"
              value="phone"
              checked={formState.contactMethod === "phone"}
              onChange={handleChange}
              className="h-4 w-4 border-slate-300 text-brass-600 focus:ring-brass-500"
            />
            <label htmlFor="contact-phone" className="ml-2 text-sm text-slate-700">
              Phone
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-md bg-brass-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brass-600 focus:outline-none focus:ring-2 focus:ring-brass-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div className="rounded-md bg-green-50 p-4">
          <p className="text-sm text-green-800">
            Thank you for your message! We'll get back to you soon.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm text-red-800">
            There was an error sending your message. Please try again.
          </p>
        </div>
      )}

      {/* Privacy Note */}
      <p className="text-xs text-slate-500">
        Your information is confidential and will never be shared with third parties.
      </p>
    </form>
  );
}
