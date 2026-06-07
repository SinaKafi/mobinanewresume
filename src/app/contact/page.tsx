import ContactContent from "@/components/contact/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mobina Moghadam",
  description:
    "Get in touch with Mobina Moghadam for collaboration, freelance, or full-time opportunities.",
};

export default function ContactPage() {
  return <ContactContent />;
}
