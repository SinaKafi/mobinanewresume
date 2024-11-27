import React from "react";

const SVGArrowUp = ({ width = "11", height = "11", className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 6"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        d="M5.49963 0.150098L10.4996 5.1501L9.79963 5.8501L5.49963 1.5501L1.19963 5.8501L0.499634 5.1501L5.49963 0.150098Z"
        fill="#2E2E2E"
      />
    </svg>
  );
};

export default SVGArrowUp;
