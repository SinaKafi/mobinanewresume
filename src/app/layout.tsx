import type { Metadata, Viewport } from "next";
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
        url: "https://www.mobinamoghadam.art/mobi.png",
        width: 1200,
        height: 630,
        alt: "Mobina Moghadam Portfolio",
      },
    ],
  },

  themeColor: "#fff",
};
export const viewport: Viewport = {
  themeColor: "white",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/vector.svg" />
        {/* Meta Tags for Basic Setup */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          property="og:image"
          content={"https://www.mobinamoghadam.art/mobi.png"}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#fff" />
        {/* Cache Control (For better performance) */}
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="UI/UX Designer Portfolio - Mobina Moghadam"
        />
        <meta
          name="keywords"
          content="Mobina Moghadam, UI/UX Designer, Portfolio, Creative Design, Web Design, User Experience"
        />
        <meta name="author" content="Mobina Moghadam" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Mobina Moghadam | Portfolio" />
        <meta
          property="og:description"
          content="Discover the creative UI/UX designs by Mobina Moghadam."
        />
        <meta property="og:url" content="https://www.mobinamoghadam.art" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.mobinamoghadam.art/mobi.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mobina Moghadam Portfolio" />
        {/* Canonical Link for SEO */}
        <link rel="canonical" href="https://www.mobinamoghadam.art/portfolio" />
        <link rel="preload" href="/TractorAppCaseStudy.png" as="image" />
      </head>

      <body className="antialiased flex flex-col w-full  min-h-screen  bg-background  ">
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
