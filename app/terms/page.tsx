// app/terms-and-conditions/page.tsx
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | NK Interiors",
  description:
    "Terms and Conditions for NK Interiors. Please read our policies on design services, consultations, project agreements, payments, and client responsibilities.",
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "October 24, 2025";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: {lastUpdated}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing our website or engaging NK Interiors for interior design
            services, you (“Client”) agree to these Terms and Conditions (“Terms”).
            These Terms constitute a legally binding agreement between you and NK
            Interiors (“we”, “us”, or “our”).
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you do not agree with any part of these Terms, please refrain from
            using our website or design services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Scope of Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NK Interiors provides professional interior design services including
            design consultation, planning, 3D visualization, material selection,
            and project execution. The scope of work will be clearly defined in
            your project proposal or agreement.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>All design work remains the intellectual property of NK Interiors</li>
            <li>Revisions beyond the agreed number will incur additional charges</li>
            <li>Design deliverables may vary depending on the chosen package</li>
            <li>Project timelines are estimated and may change due to material or labor delays</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Consultation & Booking
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clients may book consultations through our website, email, or phone.
            Consultations are scheduled based on availability and confirmed upon
            receipt of the consultation fee, if applicable.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Consultation fees are non-refundable</li>
            <li>Rescheduling must be requested at least 24 hours in advance</li>
            <li>Project commencement begins only after signing the formal agreement</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Payment Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Payments for NK Interiors projects must adhere to the agreed milestones
            as outlined in the project quotation or agreement:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>50% advance payment at project initiation</li>
            <li>30% payment upon design approval and material confirmation</li>
            <li>20% final payment before project completion</li>
            <li>All payments are non-refundable once work has commenced</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            NK Interiors reserves the right to pause or terminate work if payment
            milestones are not met. All payments must be made to official NK Interiors
            accounts only.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Design Modifications
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Clients are entitled to a specific number of design revisions as per
            their package. Any additional changes after design finalization or during
            execution may lead to extra charges and timeline extensions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Materials & Execution
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Material selection (such as furniture, lighting, fabrics, or flooring)
            will be finalized in consultation with the client. NK Interiors ensures
            that all materials are of professional quality, but variations may occur
            due to manufacturing differences or availability.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>All materials are subject to market availability and lead times</li>
            <li>Any delay due to supplier issues or client-side approval will affect delivery schedules</li>
            <li>NK Interiors is not responsible for natural wear and tear or misuse after handover</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Cancellation Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the event of cancellation:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Cancellation before project start: 20% of total cost will be retained</li>
            <li>Cancellation after work initiation: No refunds for completed phases</li>
            <li>Design fees are non-refundable under all circumstances</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All designs, drawings, layouts, and visualizations created by NK Interiors
            remain our intellectual property, even after project completion. They may
            not be reproduced, resold, or used for other projects without written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            NK Interiors shall not be held liable for any indirect, incidental, or
            consequential damages arising from the use of our services. Our liability,
            if proven, shall not exceed the total fees paid by the client for the project.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Modifications & Updates
          </h2>
          <p className="text-gray-700 leading-relaxed">
            NK Interiors reserves the right to modify these Terms and Conditions at
            any time. Updates will be posted on our website with a revised “Last
            Updated” date. Continued use of our services implies acceptance of the
            updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Governing Law & Jurisdiction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms and Conditions are governed by the laws of India. Any disputes
            arising under these terms shall be subject to the exclusive jurisdiction of
            the courts located in Mumbai, Maharashtra.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For any questions or clarifications regarding these Terms and Conditions,
            please contact us:
          </p>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-800 mb-2">
              <strong>NK Interiors</strong>
            </p>
            <p className="text-gray-700 mb-2">Email: info@nkinteriors.com</p>
            <p className="text-gray-700 mb-2">Phone: +91 98765 43210</p>
            <p className="text-gray-700">
              Address: Plot 21, Sector 5, Kharghar, Navi Mumbai, Maharashtra, India
            </p>
          </div>
        </section>

        <section className="border-t pt-8">
          <p className="text-sm text-gray-600 italic">
            By engaging NK Interiors, you acknowledge that you have read, understood,
            and agreed to these Terms and Conditions.
          </p>
        </section>
      </div>
    </div>
  );
}
