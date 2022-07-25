import { theme } from '@/styles/theme';
import React from 'react';

const LeftDirection = () => {
  return (
    <svg
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" fill="white" fillOpacity="0.01" />
      <path
        d="M31 36L19 24L31 12"
        stroke={theme.color.font.gray}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftDirection;
