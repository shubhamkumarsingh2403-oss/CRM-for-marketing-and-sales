import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-sm rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        
        <div className="prose prose-indigo space-y-6 text-gray-600">
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing and using this CRM application, you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, you do not have permission to access the application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Acceptable Use</h2>
            <p>You agree not to use the application to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Upload or distribute any harmful, malicious, or unlawful content.</li>
              <li>Interfere with or disrupt the integrity or performance of the application.</li>
              <li>Attempt to gain unauthorized access to the application or its related systems.</li>
              <li>Use the application for any unauthorized commercial purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our application.
            </p>
            <p className="mt-2">
              You are responsible for safeguarding the password that you use to access the application and for any activities or actions under your password.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Services Integration</h2>
            <p>
              Our application integrates with third-party services, including Google Calendar. By using these integrations, 
              you also agree to comply with the terms of service of these respective third-party providers. 
              We are not responsible for the availability, accuracy, or performance of such third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Intellectual Property</h2>
            <p>
              The application and its original content, features, and functionality are and will remain the exclusive property of 
              the application owners and its licensors. The application is protected by copyright, trademark, and other laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Limitation of Liability</h2>
            <p>
              In no event shall the application owners, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a 
              material change will be determined at our sole discretion. By continuing to access or use our application after 
              those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
