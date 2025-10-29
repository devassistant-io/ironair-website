import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header forceScrolled={true} />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <h1 className="text-5xl font-bold text-iron-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-iron-600 mb-8">Effective Date: January 1, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                At Iron Air HC (Home Comfort), we value and respect your privacy. This Privacy Policy explains how we collect, use, protect, and handle your personal information when you visit our website or use our services. If you have questions about this policy, please don't hesitate to reach out to us at info@ironairhc.com or call (365) 888-5854.
              </p>
              <p className="text-iron-700 leading-relaxed">
                This policy applies exclusively to information gathered through our website and digital platforms. It does not cover information collected through offline channels or other means outside our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Your Consent</h2>
              <p className="text-iron-700 leading-relaxed">
                By accessing and using our website, you acknowledge that you have read, understood, and agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please discontinue use of our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Information We Collect</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                We collect information to provide you with better service and improve your experience. The specific information we request and why we need it will always be clearly communicated at the time of collection.
              </p>
              
              <h3 className="text-2xl font-semibold text-iron-900 mb-3 mt-6">Information You Provide Directly</h3>
              <p className="text-iron-700 leading-relaxed mb-4">
                When you contact us for service, request a quote, or fill out forms on our website, you may provide:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>Full name and contact details (phone number, email address)</li>
                <li>Service address and property information</li>
                <li>Service requests, questions, or concerns</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Any additional details you choose to share with us</li>
              </ul>

              <h3 className="text-2xl font-semibold text-iron-900 mb-3 mt-6">Information Collected Automatically</h3>
              <p className="text-iron-700 leading-relaxed mb-4">
                When you visit our website, certain technical information is automatically collected, including:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>IP address and general location data</li>
                <li>Browser type and version</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website or source of traffic</li>
                <li>Date and time of your visit</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">How We Use Your Information</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                The information we collect helps us deliver exceptional service. We use your data to:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>Schedule appointments and provide HVAC services</li>
                <li>Respond to your inquiries and service requests</li>
                <li>Send appointment reminders and service notifications</li>
                <li>Process payments and maintain billing records</li>
                <li>Improve our website functionality and user experience</li>
                <li>Analyze website traffic and user behavior patterns</li>
                <li>Send relevant promotional offers and service updates (with your permission)</li>
                <li>Maintain compliance with legal and regulatory requirements</li>
                <li>Prevent fraudulent activity and enhance security</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                Like most modern websites, Iron Air HC uses cookies and similar technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us remember your preferences and understand how you interact with our site.
              </p>
              
              <h3 className="text-2xl font-semibold text-iron-900 mb-3 mt-6">Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
                <li><strong>Analytics Cookies:</strong> Help us understand site usage and performance</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
              
              <p className="text-iron-700 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect your ability to use some features of our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Third-Party Services</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                We work with trusted third-party service providers to enhance our website and marketing efforts. These partners may include:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li><strong>Google Analytics:</strong> For website traffic analysis and insights</li>
                <li><strong>Google Ads:</strong> To display relevant advertisements across the web</li>
                <li><strong>Payment Processors:</strong> For secure payment processing</li>
                <li><strong>Email Service Providers:</strong> For sending service communications</li>
              </ul>
              <p className="text-iron-700 leading-relaxed mt-4">
                These third parties have their own privacy policies. Iron Air HC does not control and is not responsible for third-party practices. We encourage you to review their policies independently.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Data Security</h2>
              <p className="text-iron-700 leading-relaxed">
                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security. We regularly review and update our security practices to maintain the highest level of protection.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Your Privacy Rights</h2>
              
              <h3 className="text-2xl font-semibold text-iron-900 mb-3 mt-6">California Residents (CCPA)</h3>
              <p className="text-iron-700 leading-relaxed mb-4">
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>Right to know what personal data we collect and how it's used</li>
                <li>Right to request deletion of your personal information</li>
                <li>Right to opt-out of the sale of personal information (we do not sell your data)</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>

              <h3 className="text-2xl font-semibold text-iron-900 mb-3 mt-6">EU Residents (GDPR)</h3>
              <p className="text-iron-700 leading-relaxed mb-4">
                If you are located in the European Union, you have rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate information</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation on how we use your data</li>
                <li><strong>Right to Object:</strong> Object to our processing of your information</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization</li>
              </ul>
              
              <p className="text-iron-700 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at info@ironairhc.com. We will respond to your request within 30 days.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Children's Privacy</h2>
              <p className="text-iron-700 leading-relaxed">
                Iron Air HC does not knowingly collect personal information from children under the age of 13. Our services are intended for adults seeking HVAC services. If we become aware that we have inadvertently collected information from a child under 13, we will take immediate steps to delete that information. If you believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Data Retention</h2>
              <p className="text-iron-700 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Service records and communication history may be retained for several years to maintain service quality and comply with business and legal requirements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Changes to This Policy</h2>
              <p className="text-iron-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make significant changes, we will update the "Effective Date" at the top of this page and notify you through our website or by email. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Contact Us</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:
              </p>
              <div className="bg-iron-50 p-6 rounded-lg border border-iron-200">
                <p className="text-iron-900 font-semibold mb-2">Iron Air HC (Home Comfort)</p>
                <p className="text-iron-700">Phone: (365) 888-5854</p>
                <p className="text-iron-700">Email: info@ironairhc.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

