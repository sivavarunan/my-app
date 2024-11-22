import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-opacity-90">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        <span className="text-lg font-medium text-gray-600">
          Please wait, loading...
        </span>
        <div className="w-48 h-2 bg-gray-300 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
