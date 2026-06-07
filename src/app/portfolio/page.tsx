import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobina Moghadam | Portfolio",
  description: "UI/UX Designer Portfolio - Mobina Moghadam",
  openGraph: {
    title: "Mobina Moghadam | Portfolio",
    description: "Discover the creative UI/UX designs by Mobina Moghadam.",
    url: "https://www.mobinamoghadam.art/portfolio",
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

export default function Gallery() {
  return <PortfolioGallery />;
}
