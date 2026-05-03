import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-sm rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        
        <div className="prose prose-indigo space-y-6 text-gray-600">
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              Welcome to our CRM application. We respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy will inform you as to how we look after your personal data when you use our application 
              and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Google Calendar Integration</h2>
            <p>
              Our application integrates with Google Calendar to provide meeting scheduling and synchronization functionality.
            </p>
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">How we use Google Data:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>We request access to view and edit events on your Google Calendar (`https://www.googleapis.com/auth/calendar.events`).</li>
              <li>We only use this access to create, read, update, and delete calendar events that are directly scheduled through our CRM system.</li>
              <li>We <strong>do not</strong> read, access, or store your personal calendar events that were not created by our CRM application.</li>
              <li>We securely store an OAuth refresh token to maintain the connection between our CRM and your Google Calendar. This token can be revoked by you at any time.</li>
            </ul>
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Data Sharing:</h3>
            <p>
              We do not share your Google User Data with any third-party applications, nor do we sell this data. The data is exclusively used to provide the scheduling features within this CRM application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact your system administrator.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
