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
  openGraph: {
    title: "Mobina Moghadam | Portfolio",
    description: "Discover the creative UI/UX designs by Mobina Moghadam.",
    url: "https://www.mobinamoghadam.art/",
    type: "website",
    images: [
      {
        url: "/mobi.png",
        width: 1200,
        height: 630,
        alt: "Mobina Moghadam Portfolio",
      },
    ],
  },

  themeColor: "#7b7b7b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/vector.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#7b7b7b" />

        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>

      <body className="antialiased  flex flex-col w-full  min-h-screen  bg-background  ">
        <link rel="icon" type="image/x-icon" href="/vector.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/*  */}
        <meta property="og:title" content="Mobina Moghadam | Portfolio" />
        <meta
          property="og:description"
          content="Discover the creative UI/UX designs by Mobina Moghadam."
        />
        <meta property="og:url" content="https://www.mobinamoghadam.art" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.mobinamoghadam.art" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mobina Moghadam Portfolio" />
        {/*  */}
        <meta
          name="keywords"
          content="Mobina Moghadam, UI/UX Designer, Portfolio, Creative Design, Web Design, User Experience"
        />
        <meta name="author" content="Mobina Moghadam" />
        <meta
          name="description"
          content="UI/UX Designer Portfolio - Mobina Moghadam"
        />
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta name="robots" content="index, follow" />

        <div className="hidden md:block md:w-full md:h-14 xl:h-20"></div>
        <Header />

        <main className="container min-h-screen flex-grow my-11">
          {children}
        </main>

        <footer className="container h-auto py-8 flex items-center my-6 justify-center bg-background  ">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <a
                href="mailto:mmoghadam376@gmail.com"
                aria-label="Email"
                className="cursor-pointer p-2  transition-all scale-90 hover:scale-110"
              >
                <SVGMail />
              </a>
              <a
                href="https://dribbble.com/mobinadesign"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble Profile"
                className="cursor-pointer p-2 transition-all scale-90 hover:scale-110"
              >
                <SVGDrible />
              </a>
              <a
                href="https://www.linkedin.com/in/mobina-moghadam-1424aa209/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="cursor-pointer p-2  transition-all scale-90 hover:scale-110"
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
// google-site-verification=fNSWSj94G_IYsemjt3zPSzS1rXvlX826aER3jdhnDko
