"use client";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-4 md:px-40 gap-8 border-b border-gray-200 body">
        {/* Brands */}
        <div>
          <h3 className="heading-3 mb-3">Brands</h3>
          <ul className="space-y-1 text-gray-700 caption">
            <li>The CapTable</li>
            <li>AI Story</li>
            <li>HerStory</li>
            <li>Social Story</li>
            <li>Enterprise Story</li>
            <li>YS Life</li>
          </ul>
        </div>
        {/* Topics */}
        <div>
          <h3 className="heading-3 mb-3">Topics</h3>
          <ul className="space-y-1 text-gray-700 caption">
            <li>Practo</li>
            <li>Microsoft</li>
            <li>Ola</li>
            <li>Swiggy</li>
            <li>Zomato</li>
            <li>Uber</li>
          </ul>
        </div>
        {/* Resource Hub
        <div>
          <h3 className="heading-3 mb-3">Resource Hub</h3>
          <ul className="space-y-1 text-gray-700 caption">
            <li>Glossary</li>
            <li>Everything AI</li>
            <li>How-To’s</li>
            <li>Knowledge Base</li>
            <li>Opinion</li>
            <li>Unicorns Of India</li>
            <li>Fundraising Thermometer</li>
          </ul>
        </div> */}
        {/* Upcoming Events */}
        <div>
          <h3 className="heading-3 mb-3">Upcoming Events</h3>
          <ul className="space-y-1 text-gray-700 caption">
            <li>TechSparks 2025 Bengaluru</li>
            <li>TechSparks 2025 Bengaluru</li>
            <li>TechSparks 2025 Bengaluru</li>
            <li>TechSparks 2025 Bengaluru</li>
            <li>TechSparks 2025 Bengaluru</li>
          </ul>
        </div>
        {/* Discover */}
        <div>
          <h3 className="heading-3 mb-3">Discover</h3>
          <ul className="space-y-1 text-gray-700 caption">
            <li>Partner With Us</li>
            <li>Pitch To Us</li>
            <li>Browse Startups</li>
            <li>Bharat Project</li>
            <li>Bharat Project</li>
            <li>Bharat Project</li>
          </ul>
        </div>
        {/* Newsletter/Other Info */}
        {/* <div>
          <h3 className="heading-3 mb-3">Newsletter</h3>
          <p className="text-gray-700 caption mb-3">Sign up for our newsletter to get the latest stories and updates.</p>
        </div> */}
      </div>
      <div className="max-w-7xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="heading-hero tracking-tight text-gray-900 mb-4 md:mb-0">VEPAAR STORIES</div>
        <ul className="flex flex-wrap gap-6 text-gray-700 caption font-medium">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms &amp; Condition</a></li>
        </ul>
      </div>
      <div className="text-center text-gray-400 caption pb-4">&copy; {year} Vepaar Stories. All rights reserved.</div>
    </footer>
  );
}
