import type { Metadata } from 'next';
import { OG_IMAGE, SITE_NAME, SITE_URL } from '@/config/site';

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  openGraphTitle,
  openGraphDescription,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogTitle = openGraphTitle ?? title;
  const ogDescription = openGraphDescription ?? description;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMAGE.url],
    },
  };
}
