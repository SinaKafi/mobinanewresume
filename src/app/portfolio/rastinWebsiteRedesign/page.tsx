import PortfolioDetailLayout from '@/components/portfolio/PortfolioDetailLayout';
import { createPageMetadata } from '@/lib/metadata';
import { DESIGNED } from '@/utils/datas';

export const metadata = createPageMetadata({
  title: 'Rastin Website Redesign',
  description:
    'UI/UX case study for the redesign of Rastin website — improved information architecture, visual hierarchy, and conversion-focused flows.',
  path: '/portfolio/rastinWebsiteRedesign',
  openGraphDescription:
    'Explore the UI/UX redesign of the Rastin website with a cleaner structure, stronger hierarchy, and refined visual system.',
});

export default function Page() {
  const project = DESIGNED.find((item) => item.id === 11);

  return (
    <PortfolioDetailLayout
      projectId={11}
      images={project?.images}
      title={project?.title}
    >
      <div className="flex flex-col space-y-8">
        <h1 className="designHeading">Product Overview</h1>
        <p className="designTitle">
          The Rastin website, as one of the main touchpoints between users and
          the product, needed a redesign and UX improvement. The goal of this
          project was to improve the overall interface quality, simplify the
          main user flows, and create a smoother experience across different
          parts of the website.
        </p>
        <p className="designTitle">
          During this process, the page structure, information layout, trading
          flows, and data presentation were reviewed and improved so users could
          access key sections such as markets, buying and selling digital
          assets, and account management more easily and efficiently.
        </p>

        <div>
          <h2 className="designHeading2">Project Goals:</h2>
          <div className="pl-4 md:pl-6">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="designTitle">
                  Improve the website’s overall UI/UX
                </span>
              </li>
              <li>
                <span className="designTitle">
                  Simplify the main user flows
                </span>
              </li>
              <li>
                <span className="designTitle">
                  Increase clarity and reduce user confusion
                </span>
              </li>
              <li>
                <span className="designTitle">
                  Create a more organized, professional, and scalable structure
                </span>
              </li>
              <li>
                <span className="designTitle">
                  Align the website design with Rastin’s visual brand language
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="designHeading2">Design Process:</h2>
          <ol className="list-decimal list-inside marker:font-medium space-y-8">
            <li>
              <span className="designTitleBold">Existing Product Review</span>
              <p className="designTitle mb-2">
                The current version of the website was reviewed to identify the
                main usability issues, layout problems, access barriers, and
                information presentation gaps.
              </p>
            </li>
            <li>
              <span className="designTitleBold">User Behavior Analysis</span>
              <p className="designTitle mb-2">
                By reviewing key user paths and high-engagement areas, the
                sections that needed improvement were identified, especially
                around trading flows, markets, and access to the main product
                features.
              </p>
            </li>
            <li>
              <span className="designTitleBold">Page Structure Redesign</span>
              <p className="designTitle mb-2">
                The website structure was redesigned to place important
                information in more effective positions and help users make
                decisions faster and with more confidence.
              </p>
            </li>
            <li>
              <span className="designTitleBold">UI Improvement</span>
              <p className="designTitle mb-2">
                The new design focused on better readability, more consistent
                spacing, clearer visual hierarchy, and more effective use of
                colors and components.
              </p>
            </li>
            <li>
              <span className="designTitleBold">Design Consistency</span>
              <p className="designTitle mb-2">
                The pages were redesigned to create a more consistent experience
                across the website, so users could interact with a familiar,
                organized, and trustworthy structure throughout their journey.
              </p>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="designHeading2">Project Outcome:</h2>
          <p className="designTitle">
            The result of this redesign was a cleaner, clearer, and more
            user-friendly website. By improving the page structure and key user
            flows, users were able to navigate the website more easily, reach
            their goals faster, and have a smoother experience while using
            Rastin’s services.
          </p>
        </div>
      </div>
    </PortfolioDetailLayout>
  );
}
