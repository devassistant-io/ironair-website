import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsOfServicePage() {
  return (
    <>
      <Header forceScrolled={true} />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <h1 className="text-5xl font-bold text-iron-900 mb-6">Terms of Service</h1>
          <p className="text-lg text-iron-600 mb-8">Effective Date: January 1, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Agreement to Terms</h2>
              <p className="text-iron-700 leading-relaxed">
                Welcome to Iron Air HC (Home Comfort). By accessing our website or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our website and services. The materials and services provided by Iron Air HC are protected by applicable copyright and trademark law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Terminology</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                The following terminology applies throughout these Terms of Service, Privacy Policy, and any related agreements:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li><strong>"Client," "You," and "Your"</strong> refers to you, the individual accessing this website and accepting these terms</li>
                <li><strong>"Company," "We," "Us," and "Our"</strong> refers to Iron Air HC (Home Comfort)</li>
                <li><strong>"Parties"</strong> refers collectively to both you and Iron Air HC</li>
                <li><strong>"Services"</strong> refers to all HVAC services, information, and resources provided by Iron Air HC</li>
              </ul>
              <p className="text-iron-700 leading-relaxed mt-4">
                All terminology is interchangeable regardless of singular or plural usage, capitalization, or gender pronouns.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Use of Website and Content License</h2>
              
              <h3 className="text-2xl font-semibold text-iron-900 mb-3 mt-6">Permitted Use</h3>
              <p className="text-iron-700 leading-relaxed mb-4">
                You may access our website for personal, non-commercial use to:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>View information about our HVAC services</li>
                <li>Request service appointments or quotes</li>
                <li>Contact our team for support or inquiries</li>
                <li>Learn about heating and cooling solutions</li>
              </ul>

              <h3 className="text-2xl font-semibold text-iron-900 mb-3 mt-6">Content Restrictions</h3>
              <p className="text-iron-700 leading-relaxed mb-4">
                Unless explicitly authorized in writing, you must NOT:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>Republish, sell, rent, or sublicense material from our website</li>
                <li>Reproduce, duplicate, or copy content without permission</li>
                <li>Redistribute or commercially exploit our content</li>
                <li>Use our website for any unlawful purpose</li>
                <li>Attempt unauthorized access to our systems or networks</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Collect personal information from other users</li>
                <li>Impersonate Iron Air HC or our employees</li>
                <li>Use automated systems (bots, scrapers) without permission</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                By accessing Iron Air HC's website, you consent to the use of cookies in accordance with our Privacy Policy. We utilize cookies to:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>Enable essential website functionality</li>
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Improve your overall browsing experience</li>
                <li>Deliver relevant content and advertisements</li>
              </ul>
              <p className="text-iron-700 leading-relaxed mt-4">
                Most web browsers automatically accept cookies, but you can modify your browser settings to decline them. Note that disabling cookies may limit certain features of our website. Our advertising and analytics partners may also use cookies to track your activity across the web.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Services and Appointments</h2>
              
              <h3 className="text-2xl font-semibold text-iron-900 mb-3 mt-6">Service Appointments</h3>
              <p className="text-iron-700 leading-relaxed mb-4">
                When you schedule a service appointment with Iron Air HC:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>You agree to provide accurate contact and property information</li>
                <li>You must be present or arrange for authorized access to your property</li>
                <li>You agree to pay for services rendered according to agreed-upon rates</li>
                <li>Cancellations must be made at least 24 hours in advance when possible</li>
              </ul>

              <h3 className="text-2xl font-semibold text-iron-900 mb-3 mt-6">Pricing and Payments</h3>
              <p className="text-iron-700 leading-relaxed mb-4">
                All prices quoted are subject to the following:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>Prices may vary based on the scope of work, materials, and labor required</li>
                <li>Final pricing will be confirmed before work begins</li>
                <li>Payment is due upon completion of service unless other arrangements are made</li>
                <li>We accept cash, check, and major credit cards</li>
                <li>Prices do not include applicable taxes unless stated otherwise</li>
              </ul>

              <h3 className="text-2xl font-semibold text-iron-900 mb-3 mt-6">Service Warranty</h3>
              <p className="text-iron-700 leading-relaxed">
                Iron Air HC stands behind our work. Specific warranty terms depend on the type of service performed and equipment installed. Warranty details will be provided in writing at the time of service. Warranties may be voided by unauthorized repairs, improper use, or lack of maintenance.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Intellectual Property</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                All content on this website, including text, graphics, logos, images, videos, and software, is the property of Iron Air HC or its content suppliers and is protected by international copyright laws. The Iron Air HC name and logo are trademarks of Iron Air HC.
              </p>
              <p className="text-iron-700 leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission from Iron Air HC.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Disclaimer of Warranties</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                The materials and information on Iron Air HC's website are provided on an "as is" and "as available" basis. To the maximum extent permitted by applicable law, Iron Air HC makes no warranties, expressed or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that the website will be uninterrupted or error-free</li>
                <li>Warranties regarding the accuracy, completeness, or reliability of content</li>
                <li>Warranties that defects will be corrected</li>
                <li>Warranties that our website or servers are free of viruses or harmful components</li>
              </ul>
              <p className="text-iron-700 leading-relaxed mt-4">
                While we strive to maintain accurate and current information, we do not guarantee the completeness, accuracy, or timeliness of any content on our website. We do not warrant that the website will remain available or that content will be kept up to date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Limitations of Liability</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, Iron Air HC and its officers, directors, employees, suppliers, and affiliates shall not be liable for any damages arising from:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>Use or inability to use our website or services</li>
                <li>Loss of data, profits, revenue, or business opportunities</li>
                <li>Business interruption or service delays</li>
                <li>Errors, mistakes, or inaccuracies in content</li>
                <li>Unauthorized access to your transmissions or data</li>
                <li>Any third-party conduct or content on the website</li>
              </ul>
              <p className="text-iron-700 leading-relaxed mt-4 mb-4">
                This limitation applies even if Iron Air HC has been advised of the possibility of such damages. These limitations shall apply to the fullest extent permitted by law.
              </p>
              <p className="text-iron-700 leading-relaxed mb-4">
                Nothing in this disclaimer will:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>Limit or exclude liability for death or personal injury caused by negligence</li>
                <li>Limit or exclude liability for fraud or fraudulent misrepresentation</li>
                <li>Limit liability in any way not permitted under applicable law</li>
                <li>Exclude any liability that cannot be excluded under applicable law</li>
              </ul>
              <p className="text-iron-700 leading-relaxed mt-4">
                Because some jurisdictions do not allow certain limitations on implied warranties or liability for consequential or incidental damages, some of these limitations may not apply to you. In such cases, our liability shall be limited to the maximum extent permitted by law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Hyperlinking to Our Website</h2>
              
              <h3 className="text-2xl font-semibold text-iron-900 mb-3 mt-6">Organizations That May Link Without Approval</h3>
              <p className="text-iron-700 leading-relaxed mb-4">
                The following organizations may link to our website without prior written permission:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>Government agencies and regulatory bodies</li>
                <li>Search engines and online directories</li>
                <li>News organizations and media outlets</li>
                <li>Accredited business associations</li>
                <li>Educational institutions and trade organizations</li>
              </ul>

              <h3 className="text-2xl font-semibold text-iron-900 mb-3 mt-6">Link Requirements</h3>
              <p className="text-iron-700 leading-relaxed mb-4">
                All links to our website must:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>Not be deceptive or misleading in any way</li>
                <li>Not falsely imply sponsorship or endorsement by Iron Air HC</li>
                <li>Fit appropriately within the context of the linking site</li>
                <li>Not damage our reputation or brand image</li>
              </ul>

              <h3 className="text-2xl font-semibold text-iron-900 mb-3 mt-6">Link Approval Process</h3>
              <p className="text-iron-700 leading-relaxed mb-4">
                Other organizations wishing to link to our website should contact us via email at info@ironairhc.com with the following information:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>Your name and organization name</li>
                <li>Complete contact information</li>
                <li>URL of your website</li>
                <li>List of URLs from which you intend to link</li>
                <li>Specific pages you wish to link to</li>
              </ul>
              <p className="text-iron-700 leading-relaxed mt-4">
                Please allow 2-3 weeks for review and response. Use of our logo or branding requires a separate trademark license agreement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">iFrames and Embedded Content</h2>
              <p className="text-iron-700 leading-relaxed">
                You may not create frames around our website pages or use any technique that alters the visual presentation or appearance of our website without prior written approval from Iron Air HC. Unauthorized framing or embedding may result in legal action.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">User-Generated Content</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                Certain areas of our website may allow users to post reviews, comments, or other content. By submitting content, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>You have all necessary rights and permissions to post the content</li>
                <li>Your content does not infringe any intellectual property rights</li>
                <li>Your content is not defamatory, obscene, offensive, or unlawful</li>
                <li>Your content will not be used for solicitation or promotion without permission</li>
              </ul>
              <p className="text-iron-700 leading-relaxed mt-4 mb-4">
                Iron Air HC does not pre-screen user content but reserves the right to monitor, edit, or remove any content that violates these terms or is deemed inappropriate. User content does not reflect the views or opinions of Iron Air HC.
              </p>
              <p className="text-iron-700 leading-relaxed">
                By posting content, you grant Iron Air HC a non-exclusive, worldwide license to use, reproduce, modify, and distribute your content in any format or medium.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Third-Party Links and Content Liability</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                Our website may contain links to third-party websites or services not owned or controlled by Iron Air HC. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.
              </p>
              <p className="text-iron-700 leading-relaxed mb-4">
                You acknowledge and agree that Iron Air HC shall not be held responsible or liable for any damage, loss, or issues arising from your use of third-party websites or services. We recommend reviewing the terms and privacy policies of any external sites you visit.
              </p>
              <p className="text-iron-700 leading-relaxed">
                If you find any link on our website offensive or problematic, please contact us. We will consider removal requests but are not obligated to remove links or respond directly.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Reservation of Rights</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                Iron Air HC reserves the right to:
              </p>
              <ul className="list-disc pl-6 text-iron-700 space-y-2">
                <li>Request removal of any links to our website at our discretion</li>
                <li>Modify these Terms of Service at any time without prior notice</li>
                <li>Update our linking policies and content guidelines</li>
                <li>Refuse service to anyone for any lawful reason</li>
                <li>Remove or modify website content without notice</li>
              </ul>
              <p className="text-iron-700 leading-relaxed mt-4">
                By continuing to use our website, you agree to be bound by the current version of these Terms of Service. Upon request to remove links, you agree to comply immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Emergency Services</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                While Iron Air HC offers 24/7 emergency HVAC services, response times may vary based on technician availability, weather conditions, and service demand. Emergency service rates may apply for after-hours, weekend, or holiday calls.
              </p>
              <p className="text-iron-700 leading-relaxed">
                In the event of a gas leak or carbon monoxide emergency, immediately evacuate the premises and call your local gas company or emergency services (911) before contacting us.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Indemnification</h2>
              <p className="text-iron-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Iron Air HC, its officers, directors, employees, agents, and third parties, from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms of Service or any activity related to your use of our website or services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Governing Law</h2>
              <p className="text-iron-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Iron Air HC operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Changes to Terms</h2>
              <p className="text-iron-700 leading-relaxed">
                Iron Air HC reserves the right to revise these Terms of Service at any time without prior notice. By using this website, you are agreeing to be bound by the current version of these Terms of Service. We encourage you to periodically review these terms to stay informed of any updates.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Severability</h2>
              <p className="text-iron-700 leading-relaxed">
                If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining Terms of Service will otherwise remain in full force and effect.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-iron-900 mb-4">Contact Information</h2>
              <p className="text-iron-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-iron-50 p-6 rounded-lg border border-iron-200">
                <p className="text-iron-900 font-semibold mb-2">Iron Air HC (Home Comfort)</p>
                <p className="text-iron-700">Phone: (365) 888-5854</p>
                <p className="text-iron-700">Email: info@ironairhc.com</p>
                <p className="text-iron-700 mt-2">Available 24/7 for emergency service</p>
              </div>
            </section>

            <section className="mb-10">
              <p className="text-iron-700 leading-relaxed italic">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

