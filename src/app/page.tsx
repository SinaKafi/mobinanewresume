import LandingPage from "@/components/landing/LandingPage";
import { DESIGNED } from "@/utils/datas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobina Moghadam | Product Designer",
  description:
    "UI/UX Product Designer crafting intuitive digital experiences. Explore featured work, case studies, and portfolio.",
  openGraph: {
    title: "Mobina Moghadam | Product Designer",
    description:
      "Discover the creative UI/UX designs by Mobina Moghadam.",
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
};

export default function Home() {
  const featured = DESIGNED.slice(0, 3);

  return <LandingPage featured={featured} />;
}
