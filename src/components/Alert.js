import React from 'react';

export const Alert = ({ children, className }) => (
  <div className={`bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative ${className}`} role="alert">
    {children}
  </div>
);

export const AlertTitle = ({ children }) => (
  <strong className="font-bold">{children}</strong>
);

export const AlertDescription = ({ children }) => (
  <span className="block sm:inline">{children}</span>
);