import type { Metadata } from "next";
import "./globals.css";
import Header from "@/styles/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "react-slideshow-image/dist/styles.css";
import SVGMail from "@/components/SVGS/SVGMail";
import SVGDrible from "@/components/SVGS/SVGDrible";
import SVGLinkdin from "@/components/SVGS/SVGLinkdin";

export const metadata: Metadata = {
  title: "Mobina Moghadam | Portfolio",
  description: "UI/UX Designer Portfolio - Mobina Moghadam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col w-full relative min-h-screen gap-16 bg-background  ">
        <Header />

        <main className="container min-h-screen flex-grow">{children}</main>

        <footer className="container h-auto py-8 flex items-center justify-center bg-background  ">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <a
                href="mailto:mmoghadam376@gmail.com"
                aria-label="Email"
                className="cursor-pointer p-2 hover:text-blue-500"
              >
                <SVGMail />
              </a>
              <a
                href="https://dribbble.com/mobinadesign"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble Profile"
                className="cursor-pointer p-2 hover:text-pink-500"
              >
                <SVGDrible />
              </a>
              <a
                href="https://www.linkedin.com/in/mobina-moghadam-1424aa209/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="cursor-pointer p-2 hover:text-blue-700"
              >
                <SVGLinkdin />
              </a>
            </div>

            <p className="text-sm font-light text-center text-gray2">
              Looking forward to connecting with you!
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
