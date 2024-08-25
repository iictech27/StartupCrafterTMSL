import React from 'react';
import Header from './Header';

export default function Contact() {
  return (<>
    <Header />
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <p className="mb-4">
        If you have any questions, concerns, or would like to request that your account and associated data be deleted, please follow the steps below:
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Steps to Request Account Deletion</h2>
      <ol className="list-decimal list-inside pl-4 mb-4">
        <li>Send an email to our Developer Head: <a href="mailto:theashhar.work@gmail.com" className="text-blue-500 underline">theashhar.work@gmail.com</a></li>
        <li>In your email, please include the following details:
          <ul className="list-disc list-inside pl-4 mt-2">
            <li>Your full name</li>
            <li>The email address associated with your account</li>
            <li>A brief description of your request (e.g., "Request to delete account and associated data")</li>
          </ul>
        </li>
        <li>Our support team will process your request and confirm the deletion of your account and data within 7 business days.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Data Deletion Policy</h2>
      <p className="mb-4">
        Upon your request, we will delete your account and any associated data from our systems. 
        {/* Please note that some data may be retained for legal or operational reasons, but it will be securely stored and protected according to our Privacy Policy. */}
      </p>
      
      <p className="mt-10 text-sm text-gray-600">
        {/* Last updated: [Date] */}
      </p>
    </div>
    </>);
}
