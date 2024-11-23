"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  return (
    <div className="sticky top-0 w-full bg-background z-50">
      <div className="container header h-36  flex justify-between items-center gap-4">
        <div className="flex flex-col">
          <h1 className="relative cursor-pointer font-medium text-2xl text-foreground leading-10">
            MOBINA'S 2024 PORTFOLIO
          </h1>
          <h2 className="text-xl font-light text-gray2"> PRODUCT DESIGNER</h2>
        </div>
        <div className="flex justify-between items-center gap-6">
          <Link
            href={"/"}
            className={`relative cursor-pointer ${path == "/" && "active"}`}
          >
            ABOUT ME
          </Link>
          <Link
            href={"/experience"}
            className={`relative cursor-pointer ${
              path == "/experience" && "active"
            }`}
          >
            EXPERIENCE
          </Link>
          <Link
            href={"/gallery"}
            className={`relative cursor-pointer ${
              path == "/gallery" && "active"
            }`}
          >
            GALLERY
          </Link>
          <button className="bg-foreground px-8 py-2 rounded-[4px] text-background text-base font-light">
            contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
