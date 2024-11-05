// components/Loading.js

import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        <span className="text-lg font-semibold text-gray-700">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
