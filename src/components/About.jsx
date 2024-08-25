import React from 'react';
import Navbar from './Navbar';

export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="max-w-4xl mx-auto p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-6">About Startup Crafter</h1>
        
        <p className="mb-4">
          <strong>Startup Crafter</strong> is a dynamic platform designed specifically for college students who are passionate about entrepreneurship and innovation. We understand the challenges of transforming an idea into a thriving startup, especially when you're juggling academic responsibilities. That's why we created Startup Crafter—to provide a comprehensive tool that simplifies the journey from ideation to execution.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to empower student entrepreneurs by providing them with a collaborative space where they can share ideas, find talent, and build connections that can propel their startups to success. We aim to foster a community of like-minded individuals who are driven by innovation and are eager to make a difference.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
        <ul className="list-disc list-inside pl-4 mb-4">
          <li><strong>Discussion Forum:</strong> Engage in meaningful conversations with other student entrepreneurs, share your experiences, and seek advice from peers who are on the same journey.</li>
          <li><strong>Idea Submission:</strong> Got an idea? Submit it to our platform and get feedback from the community. Whether it's a rough concept or a well-thought-out plan, we encourage all levels of idea development.</li>
          <li><strong>Talent Hiring:</strong> Finding the right team is crucial for any startup's success. Our talent hiring feature allows you to connect with skilled individuals who can bring your vision to life, be it a developer, marketer, or business strategist.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Startup Crafter?</h2>
        <ul className="list-disc list-inside pl-4 mb-4">
          <li><strong>Designed for Students:</strong> We understand the unique challenges faced by student entrepreneurs, and our platform is tailored to meet those needs.</li>
          <li><strong>Community-Driven:</strong> Join a vibrant community of students who are just as passionate about startups as you are.</li>
          <li><strong>Resource-Rich:</strong> Access a wealth of resources, including guides, templates, and tools that can help you at every stage of your startup journey.</li>
        </ul>
      </div>
    </>
  );
}
