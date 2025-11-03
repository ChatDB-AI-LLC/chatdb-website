// src/app/page.tsx

"use client"; // Keep this for interactivity

import React from 'react';

// A simple Icon component for the features.
const FeatureIcon = ({ path }: { path: string }) => (
  <svg 
    className="w-8 h-8 text-blue-400 mb-3" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={1.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);


export default function HomePage() {
  
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white font-sans overflow-hidden">
      
      {/* === Background Glow === */}
      <div 
        className="absolute inset-0 m-auto max-w-lg h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] z-0" 
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-blue-500/30 blur-[100px] rounded-full" />
      </div>

      {/* === Main Content === */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-4 text-center">
        
        {/* === Header / Logo === */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          ChatDB
          <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
            AI
          </span>
        </h1>

        {/* === Value Prop === */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Conversational AI for your Database.
        </p>
        <p className="mt-2 text-md md:text-lg text-gray-400 max-w-2xl">
          Secure, conversational CRUD for SQL and NoSQL. Go from plain English to verified database operations—safely.
        </p>

        {/* === Feature Teasers === */}
        <div className="mt-16 mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center p-4">
            <FeatureIcon 
              path="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" 
            />
            <h3 className="text-lg font-semibold text-white">Secure by Default</h3>
            <p className="text-gray-400 text-sm">
              An AI-powered safety checker and "human-in-the-loop" confirmation for all write operations.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center p-4">
            <FeatureIcon 
              path="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M8.25 3v18m7.5-18v18M1.5 9h21M1.5 15h21" 
            />
            <h3 className="text-lg font-semibold text-white">SQL & NoSQL Ready</h3>
            <p className="text-gray-400 text-sm">
              Connect to your production Postgres, MongoDB, and more in one unified, conversational interface.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center p-4">
            <FeatureIcon 
              path="M17.25 6.75c0 3.036-2.464 5.5-5.5 5.5s-5.5-2.464-5.5-5.5c0-3.036 2.464-5.5 5.5-5.5s5.5 2.464 5.5 5.5zM12 12.25c-3.036 0-5.5 2.464-5.5 5.5s2.464 5.5 5.5 5.5 5.5-2.464 5.5-5.5-2.464-5.5-5.5-5.5z" 
            />
            <h3 className="text-lg font-semibold text-white">Open Source</h3>
            <p className="text-gray-400 text-sm">
              Fully open-source so you can self-host on your own infrastructure. Your credentials never leave your network.
            </p>
          </div>
        </div>

        {/* === Waitlist Form (The Hook) === */}
        {/* We add `relative z-20` to this card to ensure it's clickable. */}
        <div 
          className="relative z-20 mt-4 w-full max-w-xl p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl"
        >
          
          <h3 className="text-xl font-semibold text-white mb-4">
            Open-Source Launch Coming Soon
          </h3>
          <p className="text-gray-400 mb-6">
            Get notified when ChatDB Core 1.0 is released. No spam, just the launch announcement.
          </p>
          
          {/* === START: REAL BEEHIIV FORM (FIXED) === */}
          {/* This is the fix. We are:
            1. Using the *original* height `291px` from Beehiiv.
            2. Forcing a `backgroundColor: 'white'` and `borderRadius`
               to make it look intentional inside our dark card.
          */}
          <iframe 
            src="https://subscribe-forms.beehiiv.com/d79903cb-24ea-4d2e-b3a9-c84a3d4cfd0a" 
            className="beehiiv-embed" 
            data-test-id="beehiiv-embed" 
            frameBorder="0" 
            scrolling="no" 
            style={{ 
              width: '100%', 
              height: '100px', // <-- THE REAL FIX: Use Beehiiv's intended height
              margin: '0', 
              borderRadius: '6px', // Match our card's rounded corners
              backgroundColor: 'black' // Be explicit that the form is white
            }}
          ></iframe>
          {/* === END: REAL BEEHIIV FORM === */}

        </div>
      </main>

      {/* === Footer === */}
      <footer className="relative z-10 w-full py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ChatDB AI LLC. All rights reserved.
      </footer>
    </div>
  );
}