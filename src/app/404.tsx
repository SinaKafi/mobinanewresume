import React from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={handleGoHome}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
