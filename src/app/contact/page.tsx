import ContactContent from "@/components/contact/ContactContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Mobina Moghadam for collaboration, freelance, or full-time opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
