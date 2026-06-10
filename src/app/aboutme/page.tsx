import AboutMeContent from '@/components/aboutme/AboutMeContent';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'About Me',
  description:
    'Product designer with a passion for empathy-driven, user-centered design.',
  path: '/aboutme',
});

export default function AboutMe() {
  return <AboutMeContent />;
}
