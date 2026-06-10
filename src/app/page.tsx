import LandingPage from '@/components/landing/LandingPage';
import { createPageMetadata } from '@/lib/metadata';
import { DESIGNED } from '@/utils/datas';

export const metadata = {
  ...createPageMetadata({
    title: 'Product Designer',
    description:
      'UI/UX Product Designer crafting intuitive digital experiences. Explore featured work, case studies, and portfolio.',
    path: '/',
    openGraphTitle: 'Mobina Moghadam | Product Designer',
  }),
  title: {
    absolute: 'Mobina Moghadam | Product Designer',
  },
};

export default function Home() {
  const featured = DESIGNED.slice(0, 3);

  return <LandingPage featured={featured} />;
}
