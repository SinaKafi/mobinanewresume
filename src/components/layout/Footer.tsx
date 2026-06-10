import SVGDrible from '@/components/SVGS/SVGDrible';
import SVGLinkdin from '@/components/SVGS/SVGLinkdin';
import SVGMail from '@/components/SVGS/SVGMail';

const SOCIAL_LINKS = [
  {
    href: 'mailto:mmoghadam376@gmail.com',
    label: 'Email',
    icon: SVGMail,
    external: false,
  },
  {
    href: 'https://dribbble.com/mobinadesign',
    label: 'Dribbble Profile',
    icon: SVGDrible,
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/mobina-moghadam-1424aa209/',
    label: 'LinkedIn Profile',
    icon: SVGLinkdin,
    external: true,
  },
] as const;

export default function Footer() {
  return (
    <footer className="container py-8 my-6 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon, external }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              className="cursor-pointer p-2 transition-all scale-90 hover:scale-110"
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <Icon />
            </a>
          ))}
        </div>
        <p className="text-sm font-light text-center text-gray2">
          Looking forward to connecting with you!
        </p>
      </div>
    </footer>
  );
}
