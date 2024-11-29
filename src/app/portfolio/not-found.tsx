// "use client";
import React from "react";
// import { useRouter } from "next/navigation";

const NotFound = () => {
  // const router = useRouter();

  const handleGoHome = () => {
    // router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center  mt-32 text-center space-y-8">
      <h1 className="!text-6xl designHeading">404</h1>
      <p className="mt-4 designTitleBold">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={handleGoHome}
        className="bg-foreground px-4 py-2 xl:px-8 xl:py-2 rounded-[4px] text-background text-sm xl:text-base font-light"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
