import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — NViQ Bharat Fleet GPS Tracking",
  description:
    "Read NViQ Bharat's Privacy Policy to understand how we collect, use, store, and protect your information when you use our GPS tracking and fleet management services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white font-sans">
      <main className="max-w-3xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-slate-200">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400">Last Updated: July 2026</p>
        </div>

        {/* Body */}
        <div className="space-y-10 text-[15px] text-slate-700 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              NViQ Bharat (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
              committed to protecting the privacy of our users. This Privacy Policy explains how we
              collect, use, store, and protect your information when you use the NViQ Bharat mobile
              application, website, GPS tracking devices, and fleet management services.
            </p>
            <p className="mt-3">
              By using our services, you agree to the terms of this Privacy Policy.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p>We may collect the following categories of information:</p>

            <h3 className="font-semibold text-gray-800 mt-5 mb-2">2.1 Personal Information</h3>
            <p>
              We collect personal details such as your full name, mobile number, email address, and
              company name when you register or interact with our services.
            </p>

            <h3 className="font-semibold text-gray-800 mt-5 mb-2">2.2 Vehicle Information</h3>
            <p>
              To provide fleet tracking, we collect vehicle-related data including the vehicle
              registration number, device ID, and vehicle type.
            </p>

            <h3 className="font-semibold text-gray-800 mt-5 mb-2">2.3 Location Information</h3>
            <p>
              Our services rely on location data to function effectively. This includes real-time GPS
              location, route history, trip data, and geo-fence events generated during vehicle
              operation.
            </p>

            <h3 className="font-semibold text-gray-800 mt-5 mb-2">2.4 Device Information</h3>
            <p>
              When you use our mobile application, we may collect technical information about your
              device, including the device model, operating system, IP address, app version, and
              device identifiers.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-slate-600">
              <li>Provide real-time GPS tracking.</li>
              <li>Manage fleet operations.</li>
              <li>Generate reports and analytics.</li>
              <li>Improve driver monitoring.</li>
              <li>Send alerts and notifications.</li>
              <li>Provide customer support.</li>
              <li>Improve application performance and security.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Background Location Permission</h2>
            <p>
              The NViQ Bharat application may collect location data in the background to provide
              uninterrupted vehicle tracking, trip history, geo-fencing, and fleet monitoring, even
              when the application is not actively in use.
            </p>
            <p className="mt-3">
              Background location access is used solely to deliver the core functionality of our GPS
              tracking and fleet management services.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Sharing</h2>
            <p>
              We do not sell your personal information. Your information may be shared only with
              authorized employees, technology and cloud service providers, government authorities
              when legally required, and law enforcement agencies when required by applicable law.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Security</h2>
            <p>
              We use industry-standard security practices to protect your information, including
              encrypted communication, secure servers, controlled access to systems, and regular
              security monitoring.
            </p>
            <p className="mt-3">
              Despite our efforts, no method of electronic transmission or storage is completely
              secure.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Data Retention</h2>
            <p>
              We retain your information only for as long as necessary to provide our services,
              comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Your Rights</h2>
            <p>You may request:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-slate-600">
              <li>Access to your personal information.</li>
              <li>Correction of inaccurate or incomplete information.</li>
              <li>
                Deletion of your personal information, subject to applicable legal obligations.
              </li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Third-Party Services</h2>
            <p>
              The application may use trusted third-party services to provide essential
              functionality, including mapping services, push notification services, analytics
              services, and cloud hosting providers.
            </p>
            <p className="mt-3">
              These service providers are required to protect your information in accordance with
              applicable privacy and security standards.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              10. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on our
              website and within the application. Continued use of our services after updates
              constitutes acceptance of the revised Privacy Policy.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or our data practices, please
              contact us:
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
