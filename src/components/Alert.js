import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Alert = ({prompt}) => {
  const [isVisible, setIsVisible] = useState(true);


  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm"
      onClick={handleDismiss}
    >
      <div
        className={`bg-green-500 text-white p-4 rounded-lg shadow-lg animate-fade-in`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold">{prompt}</p>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-full"
            aria-label="Close alert"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
