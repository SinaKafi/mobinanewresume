"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const [isModal, setIsModal] = useState(false); // Sidebar toggle state

  const path = usePathname();
  const router = useRouter();
  return (
    <div className="sticky top-0 w-full bg-background z-50">
      {/* Desktop Header */}
      <div className="container header h-52 hidden md:flex justify-between items-end gap-4">
        <div
          onClick={() => router.push("/design")}
          className="donthave flex flex-col mb-10"
        >
          <h1 className="relative cursor-pointer font-medium text-base md:text-lg xl:text-2xl text-foreground leading-10">
            MOBINA'S 2024 PORTFOLIO
          </h1>
          <h2 className="text-sm md:text-base xl:text-xl font-light text-gray2">
            PRODUCT DESIGNER
          </h2>
        </div>
        <div className="flex mb-10 justify-between items-center gap-6">
          <Link
            href={"/aboutme"}
            className={`relative !text-lg cursor-pointer ${
              path === "/aboutme" && "active"
            }`}
          >
            ABOUT ME
          </Link>
          <Link
            href={"/experience"}
            className={`relative cursor-pointer !text-lg ${
              path === "/experience" && "active"
            }`}
          >
            EXPERIENCE
          </Link>
          <Link
            href={"/design"}
            className={`relative !text-lg cursor-pointer  ${
              path.includes("design") && "active"
            }`}
          >
            MY DESIGNED
          </Link>
          <button
            className="bg-foreground px-4 py-2 xl:px-8 xl:py-2 rounded-[4px] text-background text-sm xl:text-base font-light"
            onClick={() => {
              setIsModal(true);

              setIsSidebarOpen(false);
            }}
          >
            contact me
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between p-4 bg-background">
        <div className="flex flex-col">
          <h1 className="text-base font-medium text-foreground">
            MOBINA'S PORTFOLIO
          </h1>
          <h2 className="text-sm font-light text-gray2">PRODUCT DESIGNER</h2>
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
        className={`fixed top-0 left-0 h-full w-2/3 bg-background z-40 p-6 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex flex-col gap-6">
          <Link
            href={"/aboutme"}
            className={`relative  text-center cursor-pointer ${
              path === "/aboutme  " && "active"
            }`}
            onClick={() => setIsSidebarOpen(false)} // Close sidebar
          >
            ABOUT ME
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
            href={"/design"}
            className={`relative text-center  cursor-pointer ${
              path.includes("design") && "active"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            MY DESIGNED
          </Link>
          <button
            className="bg-foreground px-4 py-2 rounded-[4px] text-center  text-background text-sm font-light"
            onClick={() => {
              setIsModal(true);

              setIsSidebarOpen(false);
            }}
          >
            contact me
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
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
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
  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center duration-300 transition-opacity backdrop-blur-sm ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div className="container">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`bg-white bg-opacity-100 backdrop-blur-0 max-w-2xl mx-auto flex flex-col space-y-11 p-5 !backdrop-opacity-100 p-6 rounded-lg shadow-lg transition-all transform duration-300 ${
            isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <h2 className="text-xl font-bold mb-4">contact me</h2>
          <p className="mb-4">
            If you're interested in collaboration or want to learn more about my
            projects, I’d be happy to connect with you.{" "}
          </p>
          <div>
            <h2>Phone: 09223693919</h2>
            <h2>Email: mmoghadam376@gmail.com</h2>
          </div>
          <p>Looking forward to hearing from you!</p>
        </div>
      </div>
    </div>
  );
};
/***************** */

// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useState } from "react";

// const Header = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
//   const path = usePathname();

//   return (
//     <div className="sticky top-0 w-full bg-background z-50">
//       {/* Desktop Header */}
//       <div className="container header h-52 hidden md:flex justify-between items-end gap-4">
//         <div className="flex flex-col mb-10">
//           <h1 className="relative cursor-pointer font-medium text-base md:text-lg xl:text-2xl text-foreground leading-10">
//             MOBINA'S 2024 PORTFOLIO
//           </h1>
//           <h2 className="text-sm md:text-base xl:text-xl font-light text-gray2">
//             PRODUCT DESIGNER
//           </h2>
//         </div>
//         <div className="flex mb-10 justify-between items-center gap-6">
//           <Link
//             href={"/"}
//             className={`relative cursor-pointer ${path === "/" && "active"}`}
//           >
//             ABOUT ME
//           </Link>
//           <Link
//             href={"/experience"}
//             className={`relative cursor-pointer ${
//               path === "/experience" && "active"
//             }`}
//           >
//             EXPERIENCE
//           </Link>
//           <Link
//             href={"/gallery"}
//             className={`relative cursor-pointer ${
//               path.includes("gallery") && "active"
//             }`}
//           >
//             GALLERY
//           </Link>
//           <button className="bg-foreground px-4 py-2 xl:px-8 xl:py-2 rounded-[4px] text-background text-sm xl:text-base font-light">
//             contact me
//           </button>
//         </div>
//       </div>

//       {/* Mobile Header */}
//       <div className="flex md:hidden items-center justify-between p-4 bg-background relative overflow-hidden">
//         <div className="flex flex-col">
//           <h1 className="text-base font-medium text-foreground">
//             MOBINA'S PORTFOLIO
//           </h1>
//           <h2 className="text-sm font-light text-gray2">PRODUCT DESIGNER</h2>
//         </div>
//         {/* Hamburger Icon */}
//         <button
//           className="flex flex-col justify-center items-center gap-1 w-6 h-6"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           aria-label="Toggle sidebar"
//         >
//           <span
//             className={`block h-0.5 w-full bg-foreground transition-transform ${
//               isSidebarOpen ? "rotate-45 translate-y-1.5" : ""
//             }`}
//           ></span>
//           <span
//             className={`block h-0.5 w-full bg-foreground ${
//               isSidebarOpen ? "opacity-0" : ""
//             }`}
//           ></span>
//           <span
//             className={`block h-0.5 w-full bg-foreground transition-transform ${
//               isSidebarOpen ? "-rotate-45 -translate-y-1.5" : ""
//             }`}
//           ></span>
//         </button>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`absolute   w-full bg-background z-40 p-6 transform ${
//           isSidebarOpen ? "top-[100%]" : "-top-[1000%]"
//         } transition-all duration-300 ease-in-out shadow-lg`}
//       >
//         <div className="flex flex-col gap-6">
//           <Link
//             href={"/"}
//             className={`relative cursor-pointer ${path === "/" && "active"}`}
//             onClick={() => setIsSidebarOpen(false)} // Close sidebar
//           >
//             ABOUT ME
//           </Link>
//           <Link
//             href={"/experience"}
//             className={`relative cursor-pointer ${
//               path === "/experience" && "active"
//             }`}
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             EXPERIENCE
//           </Link>
//           <Link
//             href={"/gallery"}
//             className={`relative cursor-pointer ${
//               path.includes("gallery") && "active"
//             }`}
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             GALLERY
//           </Link>
//           <button
//             className="bg-foreground px-4 py-2 rounded-[4px] text-background text-sm font-light"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             contact me
//           </button>
//         </div>
//       </div>

//       {/* Sidebar Backdrop */}
//       {/* {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-30"
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>
//       )} */}
//     </div>
//   );
// };

// export default Header;
