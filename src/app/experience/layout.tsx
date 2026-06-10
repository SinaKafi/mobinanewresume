import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Experience',
  description:
    'Six years of design across product, UI/UX, and visual design—from freelance roots to senior roles in automotive and e-commerce.',
  path: '/experience',
});

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
