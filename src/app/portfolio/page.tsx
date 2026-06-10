import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description: "UI/UX Designer Portfolio - Mobina Moghadam",
  path: "/portfolio",
  openGraphDescription:
    "Discover the creative UI/UX designs by Mobina Moghadam.",
});

export default function Gallery() {
  return <PortfolioGallery />;
}
