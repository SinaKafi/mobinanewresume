import CaseStudyContent from "@/components/caseStudy/CaseStudyContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Case Study",
  description:
    "Tractor Fan Club App case study — product design process, research, and UI/UX outcomes.",
  path: "/caseStudy",
});

export default function CaseStudy() {
  return <CaseStudyContent />;
}
