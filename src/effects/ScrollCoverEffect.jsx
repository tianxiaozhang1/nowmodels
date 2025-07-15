"use client";
// components/ScrollCoverEffect.jsx
import React, { useEffect, useState } from 'react';

const ScrollCoverEffect = () => {
  const [isCovering, setIsCovering] = useState(false);

  // Add this log to confirm the component itself is rendering
  console.log('ScrollCoverEffect component rendering...');

  useEffect(() => {
    // This log confirms useEffect runs when the component mounts
    console.log('--- useEffect: ScrollCoverEffect mounted. Attempting to add scroll listener. ---');

    const handleScroll = () => {
      // This log MUST appear continuously as you scroll if the listener is active
      console.log('ScrollY (inside handleScroll):', window.scrollY);

      const scrollThreshold = window.innerHeight * 0.8; // Trigger at 80% of viewport height

      if (window.scrollY > scrollThreshold) {
        // Only update state if it's changing to avoid unnecessary re-renders
        if (!isCovering) {
          setIsCovering(true);
          console.log('ACTION: setIsCovering(true)');
        }
      } else {
        // Only update state if it's changing
        if (isCovering) {
          setIsCovering(false);
          console.log('ACTION: setIsCovering(false)');
        }
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);
    console.log('--- useEffect: Scroll listener ADDED. ---');

    // Clean up the event listener when the component unmounts
    return () => {
      console.log('--- useEffect: ScrollCoverEffect unmounted. Removing scroll listener. ---');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // <--- **CRITICAL FIX: Empty dependency array ensures it runs ONCE on mount**

  return (
    <div>
      {/* First Div: The h-screen hero section */}
      <div
        className="
          first-div
          h-screen w-full bg-[#a7d9f2] text-white text-4xl font-bold
          flex items-center justify-center
          sticky top-0 z-10
          overflow-hidden
        "
      >
        <h1 className="p-4 text-center">Your Full-Screen Hero Section</h1>
      </div>

      {/* Second Div: The main content that scrolls up and covers the first */}
      <div
        className={`
          second-div
          bg-white p-8 shadow-2xl shadow-black/10 min-h-[150vh] relative z-20 text-red-700
          transform transition-transform duration-500 ease-in-out
          ${isCovering ? '-translate-y-[100vh]' : 'translate-y-0'}
        `}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
          Welcome to the Main Content
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          This section now seamlessly slides up to cover the full-screen hero section above.
          The transition is handled using Tailwind CSS classes for a smooth effect.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Scroll down further to see more content and how the effect behaves.
        </p>

        {/* Add more content here to ensure scrollability */}
        {Array.from({ length: 25 }).map((_, i) => (
          <p key={i} className="my-3 text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum. ({i + 1})
          </p>
        ))}
      </div>

      {/* Placeholder content to ensure continued scrolling capability */}
      <div className="h-[500px] bg-gray-100 p-8 flex items-center justify-center text-gray-500">
        <p className="text-xl">End of page content placeholder.</p>
      </div>
    </div>
  );
};

export default ScrollCoverEffect;