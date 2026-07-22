import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — NViQ Bharat Fleet GPS Tracking",
  description:
    "Read the Terms & Conditions governing your use of NViQ Bharat's GPS tracking, fleet management, and telematics services.",
};

export default function TermsPage() {
  return (
    <div className="bg-white font-sans">
      <main className="max-w-3xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-slate-200">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-slate-400">Last Updated: July 2026</p>
        </div>

        {/* Body */}
        <div className="space-y-10 text-[15px] text-slate-700 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, accessing, or using the NViQ Bharat mobile application,
              website, GPS tracking devices, or fleet management services (&quot;Services&quot;), you
              agree to be bound by these Terms &amp; Conditions. If you do not agree with these
              Terms, please do not use our Services.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Services</h2>
            <p>
              NViQ Bharat provides a range of GPS and fleet management solutions, including GPS
              Tracking, Fleet Management, Driver Monitoring, Vehicle Monitoring, AIS-140 Compliance
              Solutions, Route Playback, Analytics &amp; Reports, Smart Alerts, and Video Telematics
              (where applicable).
            </p>
            <p className="mt-3">
              The availability of certain features may vary depending on the subscription plan and
              device compatibility.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Responsibilities</h2>
            <p>By using our Services, you agree to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-slate-600">
              <li>Provide accurate and up-to-date account information.</li>
              <li>Maintain the confidentiality of your login credentials.</li>
              <li>Use the platform only for lawful and authorized purposes.</li>
              <li>Refrain from interfering with, disrupting, or misusing the Services.</li>
              <li>Comply with all applicable local, state, and national laws and regulations.</li>
            </ul>
            <p className="mt-3">
              You are responsible for all activities conducted through your account.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. GPS Tracking Disclaimer</h2>
            <p>
              GPS tracking accuracy depends on several factors, including satellite availability,
              mobile network connectivity, device installation quality, and environmental and
              geographical conditions.
            </p>
            <p className="mt-3">
              Accordingly, NViQ Bharat does not guarantee uninterrupted service or 100% accurate
              location tracking under all circumstances.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Device Installation</h2>
            <p>
              Customers are responsible for ensuring that GPS devices are installed correctly by
              qualified personnel. Unauthorized modifications, repairs, or tampering with the device
              may affect device performance, void applicable warranties, and interrupt tracking
              services.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Subscription &amp; Payments</h2>
            <p>
              Subscription charges must be paid according to the selected plan. Failure to renew a
              subscription may result in suspension or discontinuation of Services. Payments are
              non-refundable unless required by applicable law or expressly agreed to in writing by
              NViQ Bharat.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Intellectual Property</h2>
            <p>
              All software, applications, dashboards, trademarks, logos, content, documentation,
              designs, and branding associated with NViQ Bharat are the exclusive intellectual
              property of NViQ Bharat and are protected under applicable intellectual property laws.
            </p>
            <p className="mt-3">
              No part of the Services may be copied, modified, distributed, or reproduced without
              prior written permission.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, NViQ Bharat shall not be liable for any loss
              or damages arising from business interruption, loss of revenue or profits, GPS signal
              interruptions, vehicle theft or unauthorized vehicle use, mobile or internet network
              failures, data loss or corruption, or any indirect, incidental, special, or
              consequential damages.
            </p>
            <p className="mt-3">
              Users acknowledge that GPS tracking is a monitoring tool and does not guarantee
              vehicle safety or theft prevention.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Suspension or Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account or access to the Services if
              you violate these Terms &amp; Conditions, misuse the platform or Services, fail to make
              required subscription payments, or engage in fraudulent or unlawful activities.
            </p>
            <p className="mt-3">
              Termination of Services does not relieve users of any outstanding payment obligations.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              10. Changes to These Terms
            </h2>
            <p>
              We may update these Terms &amp; Conditions from time to time. Any changes will be
              published on our website and/or within the application. Continued use of the Services
              after such updates constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Governing Law</h2>
            <p>
              These Terms &amp; Conditions shall be governed by and construed in accordance with the
              laws of India. Any disputes arising out of or relating to these Terms shall be subject
              to the exclusive jurisdiction of the competent courts in Rajasthan, India.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms &amp; Conditions, please contact us:
            </p>
            <p className="mt-4">
              <strong>NViQ Bharat Technology Private Limited</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:nviqbharat@gmail.com"
                className="text-blue-600 hover:underline"
              >
                nviqbharat@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+918796651326" className="text-blue-600 hover:underline">
                +91 87966 51326
              </a>
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
