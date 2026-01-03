import React from 'react';

export const Logo = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo_gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ec4899" /> 
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      
      {/* Background Circle */}
      <circle cx="50" cy="50" r="50" fill="url(#logo_gradient)" />
      
      {/* Main W Shape */}
      <path 
        d="M28 45 L42 72 L50 55 L58 72 L72 45" 
        stroke="white" 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Crown Spikes */}
      <path 
        d="M28 45 L28 32 L42 42" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M72 45 L72 32 L58 42" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M50 55 L50 28" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Jewel Dots */}
      <circle cx="28" cy="28" r="3" fill="white" />
      <circle cx="50" cy="24" r="3" fill="white" />
      <circle cx="72" cy="28" r="3" fill="white" />
    </svg>
  );
};