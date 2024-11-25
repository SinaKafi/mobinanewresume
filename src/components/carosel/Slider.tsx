"use client";
import Image from "next/image";
// components/ImageSlider.js
import React, { useRef, useEffect } from "react";

const ImageSlider = ({ children }: { children: any }) => {
  //   const sliderRef = useRef(null);

  //   const handleScroll = () => {
  //     const slider = sliderRef.current;
  //     if (slider) {
  //       const { scrollLeft, scrollWidth, clientWidth } = slider;
  //       if (scrollLeft + clientWidth >= scrollWidth) {
  //         (slider as any).scrollTo({ left: 0, behavior: "smooth" });
  //       }
  //     }
  //   };

  return (
    <div
      //   ref={sliderRef}
      //   onScroll={handleScroll}
      className="flex items-start justify-center "
      style={{
        display: "flex",
        overflowX: "scroll",
        scrollBehavior: "smooth",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </div>
  );
};

export default ImageSlider;
