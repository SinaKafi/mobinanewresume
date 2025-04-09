"use client";
import SVGCopied from "@/components/SVGS/SVGCopied";
import SVGCopy from "@/components/SVGS/SVGCopy";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const path = usePathname();
  const router = useRouter();
  return (
    <div className="sticky top-0 w-full bg-background z-50">
      {/* Desktop Header */}
      <div className="container header h-24 hidden md:flex justify-between items-center gap-4 ">
        <div
          className="flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => router.push("/portfolio")}
        >
          <div>
            <Image
              src={"/vector.svg"}
              alt=""
              width={50}
              height={50}
              className="block"
            />
          </div>
          <div className="donthave flex flex-col cursor-pointer">
            <h1 className=" font-medium text-sm lg:text-lg xl:text-xl text-foreground leading-10">
              MOBINA'S 2024 PORTFOLIO
            </h1>
            <h2 className="text-xs md:text-sm xl:text-base font-light text-gray2">
              PRODUCT DESIGNER
            </h2>
          </div>
        </div>
        <div className="flex  justify-between items-center gap-6">
          <Link
            href={"/portfolio"}
            className={`leading-7 relative text-sm md:text-base cursor-pointer  ${
              path.includes("portfolio") && "active"
            }`}
          >
            WORK
          </Link>
          <Link
            href={"/experience"}
            className={`leading-7 relative cursor-pointer text-sm md:text-base ${
              path === "/experience" && "active"
            }`}
          >
            EXPERIENCE
          </Link>
          <Link
            href={"/project"}
            className={`leading-7 relative cursor-pointer text-sm md:text-base  ${
              path === "/project" && "active"
            }`}
          >
            PROJECT
          </Link>

          <Link
            href={"/aboutme"}
            className={`leading-7 relative text-sm md:text-base cursor-pointer ${
              path === "/aboutme" && "active"
            }`}
          >
            ABOUT ME
          </Link>
          <Link
            href={"/caseStudy"}
            className={`leading-7 relative text-sm md:text-base cursor-pointer ${
              path === "/caseStudy" && "active"
            }`}
          >
            CASE STUDY
          </Link>
          <button
            className="bg-foreground px-4 py-2 xl:px-8 xl:py-2 rounded-[4px] text-background text-sm xl:text-base font-light"
            onClick={() => {
              setIsModal(true);

              setIsSidebarOpen(false);
            }}
          >
            CONTACT ME
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between p-4 bg-background">
        {/* added */}
        <div
          className="flex items-center justify-center gap-2"
          onClick={() => router.push("/portfolio")}
        >
          <div>
            <Image
              src={"/vector.svg"}
              alt=""
              width={50}
              height={50}
              className="block"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-medium text-foreground">
              MOBINA'S PORTFOLIO
            </h1>
            <h2 className="text-sm font-light text-gray2">PRODUCT DESIGNER</h2>
            {/* added */}
          </div>
        </div>
        {/* Hamburger Icon */}
        <button
          className="flex flex-col justify-center items-center gap-1 w-6 h-6"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <span
            className={`block h-0.5 w-full bg-foreground transition-transform ${
              isSidebarOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-foreground ${
              isSidebarOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-foreground transition-transform ${
              isSidebarOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 md:hidden left-0 h-full w-2/3 bg-background z-40 p-6 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex flex-col gap-6 mobileHeader">
          <Link
            href={"/portfolio"}
            className={`relative text-center  cursor-pointer ${
              path.includes("portfolio") && "active"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            WORK
          </Link>
          <Link
            href={"/experience"}
            className={`relative text-center  cursor-pointer ${
              path === "/experience" && "active"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            EXPERIENCE
          </Link>
          <Link
            href={"/project"}
            className={`relative text-center  cursor-pointer ${
              path === "/experience" && "active"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            PROJECTS
          </Link>
          <Link
            onClick={() => setIsSidebarOpen(false)} // Close sidebar
            href={"/aboutme"}
            className={`relative text-center  cursor-pointer ${
              path === "/aboutme" && "active"
            }`}
          >
            ABOUT ME
          </Link>
          <Link
            onClick={() => setIsSidebarOpen(false)} // Close sidebar
            href={"/caseStudy"}
            className={`relative text-center  cursor-pointer ${
              path === "/caseStudy" && "active"
            }`}
          >
            CASE STUDY
          </Link>

          <button
            className="bg-foreground px-4 py-2 rounded-[4px] text-center  text-background text-sm font-light"
            onClick={() => {
              setIsModal(true);

              setIsSidebarOpen(false);
            }}
          >
            CONTACT ME
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModal}
        onClose={() => {
          setIsModal(false);
          setIsSidebarOpen(false);
        }}
      />
      {/* Sidebar Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  md:hidden bg-gray-900 bg-opacity-50 backdrop-blur-sm z-30"
          // className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden "
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isCopied, setIsCopied] = useState({
    mobile: false,
    email: false,
  });
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsCopied((prev) => ({ ...prev, email: false }));
      clearTimeout(timeOut);
    }, 1500);
  }, [isCopied.email]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsCopied((prev) => ({ ...prev, mobile: false }));
      clearTimeout(timeOut);
    }, 1500);
  }, [isCopied.mobile]);
  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center duration-300 transition-opacity backdrop-blur-sm z-50 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      >
        <div
          className={` absolute bottom-0 md:bottom-1/2 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2  !pb-14  w-full bg-white bg-opacity-100 backdrop-blur-0 md:max-w-2xl max-w-full flex flex-col gap-y-8 md:space-y-12 items-start justify-between px-10 !py-20 rounded-t-lg md:rounded-lg shadow-lg transition-transform transform duration-300 ${
            isOpen
              ? "translate-y-0  md:scale-100 md:opacity-100 "
              : "translate-y-full  md:scale-90 md:opacity-0"
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div>
            <h2 className="inline  designHeading contactMe !relative">
              CONTACT ME
            </h2>
          </div>
          <div className="space-y-6">
            <p className="designTitle">
              If you're interested in collaboration or want to learn more about
              my projects, I’d be happy to connect with you.{" "}
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex gap-1 items-center ">
                <p className="designTitleBold">Phone:</p>
                <a href="tel:09223693919" className="designTitleBold">
                  09223693919
                </a>
                <div
                  className=" ml-2 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText("09223693919");
                    setIsCopied((prev) => ({ ...prev, mobile: true }));
                  }}
                >
                  {isCopied.mobile ? <SVGCopied /> : <SVGCopy />}
                  <div
                    className={`tooltip absolute z-50 mt-1 whitespace-normal break-words rounded-lg bg-foreground duration-300 py-1.5 px-3 scale-0 font-sans text-sm font-normal text-white focus:outline-none transition-all opacity-0 ${
                      isCopied.mobile && "opacity-100 scale-100"
                    }`}
                  >
                    copied
                  </div>
                </div>
              </div>
              <div className="flex gap-1 items-center ">
                <p className="designTitleBold"> Email:</p>
                <a
                  href="mailto:mmoghadam376@gmail.com"
                  className="designTitleBold"
                >
                  mmoghadam376@gmail.com
                </a>
                <div
                  className=" ml-2 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText("mmoghadam376@gmail.com");

                    setIsCopied((prev) => ({ ...prev, email: true }));
                  }}
                >
                  {isCopied.email ? <SVGCopied /> : <SVGCopy />}
                  <div
                    className={`tooltip absolute z-50 mt-1 whitespace-normal break-words rounded-lg bg-foreground duration-300 py-1.5 px-3 scale-0 font-sans text-sm font-normal text-white focus:outline-none transition-all opacity-0 ${
                      isCopied.email && "opacity-100 scale-100"
                    }`}
                  >
                    copied
                  </div>
                </div>
              </div>
            </div>
            <p className="designTitle">Looking forward to hearing from you!</p>
          </div>
        </div>
      </div>
    </>
  );
};
