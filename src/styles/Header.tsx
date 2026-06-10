"use client";
import ContactModal from "@/components/contact/ContactModal";
import { AnimatePresence, m } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CASE_STUDY_SUBNAV_ID } from "@/components/caseStudy/constants";
import React, { useState } from "react";

const SIDEBAR_EASE = [0.22, 1, 0.36, 1] as const;

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const path = usePathname();
  const router = useRouter();
  const isCaseStudy = path === "/caseStudy";

  return (
    <div className="sticky top-0 w-full z-50 isolate">
      <div aria-hidden className="glass-layer" />
      {/* Desktop Header */}
      <div className="container header relative h-24 hidden md:flex justify-between items-center gap-4 ">
        <div
          className="flex items-center justify-center gap-2 cursor-pointer select-none"
          onClick={() => router.push("/")}
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
          <div className="donthave flex flex-col cursor-pointer select-none">
            <h1 className=" font-medium text-sm lg:text-lg xl:text-xl text-foreground leading-10">
              MOBINA'S 2026 PORTFOLIO
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
          {/* <Link
            href={"/contact"}
            className={`leading-7 relative text-sm md:text-base cursor-pointer ${
              path === "/contact" && "active"
            }`}
          >
            CONTACT
          </Link> */}
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
      <div className="relative flex md:hidden min-h-[var(--site-header-height)] items-center justify-between p-4">
        {/* added */}
        <div
          className="flex items-center justify-center gap-2"
          onClick={() => router.push("/")}
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

      {isCaseStudy && (
        <div className="relative container flex justify-center pb-3">
          <div id={CASE_STUDY_SUBNAV_ID} className="flex justify-center" />
        </div>
      )}

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <m.div
              key="sidebar-backdrop"
              className="fixed inset-0 md:hidden bg-gray-900/50 backdrop-blur-[4px] z-30"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, ease: SIDEBAR_EASE },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.35, ease: SIDEBAR_EASE },
              }}
              onClick={() => setIsSidebarOpen(false)}
            />
            <m.aside
              key="sidebar-panel"
              className="fixed top-0 md:hidden left-0 h-full w-2/3 isolate z-40 overflow-hidden shadow-lg"
              initial={{ x: "-100%" }}
              animate={{
                x: 0,
                transition: {
                  type: "spring",
                  damping: 32,
                  stiffness: 280,
                  mass: 0.9,
                },
              }}
              exit={{
                x: "-100%",
                transition: { duration: 0.38, ease: SIDEBAR_EASE },
              }}
            >
              <div aria-hidden className="glass-layer" />
              <m.div
                className="relative flex h-full flex-col gap-6 p-6 mobileHeader"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {
                    transition: {
                      staggerChildren: 0.03,
                      staggerDirection: -1,
                    },
                  },
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                {[
                  {
                    href: "/portfolio",
                    label: "WORK",
                    active: path.includes("portfolio"),
                  },
                  {
                    href: "/experience",
                    label: "EXPERIENCE",
                    active: path === "/experience",
                  },
                  {
                    href: "/project",
                    label: "PROJECTS",
                    active: path === "/project",
                  },
                  {
                    href: "/aboutme",
                    label: "ABOUT ME",
                    active: path === "/aboutme",
                  },
                  {
                    href: "/caseStudy",
                    label: "CASE STUDY",
                    active: path === "/caseStudy",
                  },
                  {
                    href: "/contact",
                    label: "CONTACT",
                    active: path === "/contact",
                  },
                ].map((item) => (
                  <m.div
                    key={item.href}
                    className="text-center"
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.35, ease: SIDEBAR_EASE },
                      },
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`relative inline-block cursor-pointer ${
                        item.active ? "active" : ""
                      }`}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </m.div>
                ))}
                <m.div
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.35, ease: SIDEBAR_EASE },
                    },
                  }}
                >
                  <button
                    className="bg-foreground w-full px-4 py-2 rounded-[4px] text-center text-background text-sm font-light"
                    onClick={() => {
                      setIsModal(true);
                      setIsSidebarOpen(false);
                    }}
                  >
                    CONTACT ME
                  </button>
                </m.div>
              </m.div>
            </m.aside>
          </>
        )}
      </AnimatePresence>
      <ContactModal
        isOpen={isModal}
        onClose={() => {
          setIsModal(false);
          setIsSidebarOpen(false);
        }}
      />
    </div>
  );
};

export default Header;
