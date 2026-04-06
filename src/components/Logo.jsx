import React from 'react';

const Logo = ({ className = '', style = {} }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 320 220" 
      className={className} 
      style={style}
    >
      <g transform="translate(10, 10)">
        {/* 'A' Letter dynamically changes based on theme */}
        <path 
          d="M 160 45 L 200 45 L 300 200 L 255 200 L 232 165 L 128 165 L 105 200 L 60 200 Z M 180 85 L 150 130 L 210 130 Z" 
          fill="var(--color-primary)" 
          fillRule="evenodd" 
        />
        
        {/* 'T' Letter (Coral) */}
        <path 
          d="M 20 0 L 200 0 L 200 45 L 110 45 L 110 200 L 65 200 L 65 45 L 20 45 Z" 
          fill="var(--color-accent)" 
        />
      </g>
    </svg>
  );
};

export default Logo;
