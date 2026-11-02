import type { Metadata, Viewport } from 'next';
import AOSInit from '@/components/animations/AOSInit';
import MotionProvider from '@/components/animations/MotionProvider';
import Footer from '@/components/layout/Footer';
import Header from '@/styles/Header';
import {
  DEFAULT_DESCRIPTION,
  OG_DESCRIPTION,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from '@/config/site';
import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Portfolio`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'Mobina Moghadam',
    'UI/UX Designer',
    'Portfolio',
    'Creative Design',
    'Web Design',
    'User Experience',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/vector.svg',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },
  openGraph: {
    title: `${SITE_NAME} | Portfolio`,
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Portfolio`,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const montserrat = localFont({
  src: '../../public/fonts/Montserrat-VariableFont_wght.ttf',
  variable: '--font-montserrat',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased min-h-screen bg-background flex flex-col`}
      >
        <MotionProvider>
          <AOSInit />
          <div className="bg-white/70 backdrop-saturate-150 hidden md:block md:w-full md:h-14 xl:h-20" />
          <Header />
          <main className="container flex-1 my-11">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
