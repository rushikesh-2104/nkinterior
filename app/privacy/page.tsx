import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NK Interiors",
  description:
    "Privacy Policy for NK Interiors – Learn how we collect, use, and protect your personal information while delivering elegant interior design experiences.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 7, 2025";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: {lastUpdated}</p>

        {/* INTRODUCTION */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NK Interiors ("we", "us", or "our") values your privacy and is
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            data when you interact with our website, contact us for interior
            design consultations, or engage with our services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By accessing our website or using our services, you agree to this
            Privacy Policy. If you do not agree, please refrain from using our
            site or submitting your personal information.
          </p>
        </section>

        {/* INFORMATION WE COLLECT */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect personal and non-personal information when you engage
            with NK Interiors, such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              <strong>Personal Details:</strong> Name, email address, and phone
              number
            </li>
            <li>
              <strong>Project Information:</strong> Design requirements, budget,
              and preferences
            </li>
            <li>
              <strong>Payment Data:</strong> Billing details and transaction
              information (processed securely)
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, and
              device details
            </li>
            <li>
              <strong>Communications:</strong> Messages, feedback, or inquiries
              shared through our website or social platforms
            </li>
          </ul>
        </section>

        {/* HOW WE USE INFORMATION */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your data is used solely to deliver a better design experience and
            ensure smooth communication. Specifically, we use your information
            to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Respond to inquiries and provide design consultations</li>
            <li>Process service requests and manage ongoing projects</li>
            <li>
              Improve our website, services, and customer interactions based on
              feedback
            </li>
            <li>
              Send project updates, design insights, and promotional materials
              (only with your consent)
            </li>
            <li>Comply with legal and business obligations</li>
          </ul>
        </section>

        {/* DATA STORAGE */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Data Storage & Retention
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We store your personal information securely on our servers located
            in India. Your information is retained only for as long as necessary
            to fulfill the purposes outlined in this Privacy Policy or as
            required by applicable laws.
          </p>
        </section>

        {/* DISCLOSURE */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Information Sharing & Disclosure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not sell or rent your data. However, we may share information
            in the following cases:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              <strong>Service Partners:</strong> With trusted vendors assisting
              in payment processing, project management, or logistics
            </li>
            <li>
              <strong>Legal Requirements:</strong> When necessary to comply with
              laws or protect our rights
            </li>
            <li>
              <strong>Business Transfers:</strong> In case of a merger or
              restructuring, your data may be transferred securely
            </li>
          </ul>
        </section>

        {/* COOKIES */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Cookies & Analytics
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NK Interiors uses cookies and analytics tools to enhance your
            browsing experience. Cookies help us:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Understand how visitors interact with our website</li>
            <li>Improve content and user experience</li>
            <li>Offer personalized recommendations</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            You can control cookie preferences in your browser settings. Note
            that disabling cookies may affect site functionality.
          </p>
        </section>

        {/* SECURITY */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use modern security measures and encryption technologies to
            protect your data. Despite our efforts, no digital system is
            completely secure, and we encourage users to take precautions when
            sharing personal information online.
          </p>
        </section>

        {/* RIGHTS */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You have full control over your personal data. You may:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Request access to your personal data</li>
            <li>Request corrections to inaccurate information</li>
            <li>Opt out of promotional communications</li>
            <li>Request deletion of your information (subject to legal limits)</li>
          </ul>
        </section>

        {/* THIRD-PARTY */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Third-Party Links
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party services, such as
            social media or partner sites. We are not responsible for their
            content or privacy practices. We encourage you to review their
            privacy policies separately.
          </p>
        </section>

        {/* CHILDREN */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Children’s Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            NK Interiors does not knowingly collect data from children under 18.
            Our services are intended for adults seeking professional design
            assistance.
          </p>
        </section>

        {/* CHANGES */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Updates to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy occasionally to reflect changes in
            our practices or legal requirements. Updates will be posted here
            with the new “Last Updated” date.
          </p>
        </section>

        {/* CONTACT */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-800 mb-2 font-semibold">NK Interiors</p>
            <p className="text-gray-700 mb-2">Email: info@nkinteriors.com</p>
            <p className="text-gray-700 mb-2">Phone: +91 9876543210</p>
            <p className="text-gray-700">
              Address: NK Interiors Studio, Sector 10, CBD Belapur, Navi Mumbai,
              Maharashtra, India
            </p>
          </div>
        </section>

        {/* FOOTNOTE */}
        <section className="border-t pt-8">
          <p className="text-sm text-gray-600 italic">
            By using NK Interiors’ website or services, you acknowledge that you
            have read, understood, and agree to this Privacy Policy.
          </p>
        </section>
      </div>
    </div>
  );
}
