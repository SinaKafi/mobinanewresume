import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Highlight initiatives spanning healthcare, automotive e-commerce, blockchain, and organizational tools.",
  path: "/project",
});

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
