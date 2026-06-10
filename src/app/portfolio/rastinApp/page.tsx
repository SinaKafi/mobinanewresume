import PortfolioDetailLayout from '@/components/portfolio/PortfolioDetailLayout';
import { createPageMetadata } from '@/lib/metadata';
import { DESIGNED } from '@/utils/datas';

export const metadata = createPageMetadata({
  title: 'Rastin App',
  description:
    'UI/UX case study for Rastin — a cryptocurrency trading platform mobile application.',
  path: '/portfolio/rastinApp',
  openGraphDescription:
    'Discover the UI/UX design of Rastin, a dedicated mobile app for cryptocurrency trading.',
});

export default function Page() {
  const project = DESIGNED.find((item) => item.id === 10);

  return (
    <PortfolioDetailLayout
      projectId={10}
      images={project?.images}
      title={project?.title}
    >
      <div className="flex flex-col space-y-8">
        <h1 className="designHeading">Product Overview</h1>
        <p className="designTitle">
          Rastin is a cryptocurrency trading platform that enables users to buy
          and sell digital assets. Although the product already had a website
          and PWA, a dedicated mobile application was designed to provide a more
          native and optimized user experience, address existing usability
          issues, and introduce new features aimed at increasing user adoption.
        </p>
        Although the product already had a website and PWA
        <div>
          <h1 className="designHeading2">Project Goals:</h1>
          <div className="pl-4 md:pl-6">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="designTitle">
                  Improve overall UI/UX compared to the web and PWA versions
                </span>
              </li>
              <li>
                <span className="designTitle">
                  Resolve key user pain points identified in the existing
                  product
                </span>
              </li>
              <li>
                <span className="designTitle">
                  Increase user retention and conversion through new features
                </span>
              </li>
              <li>
                <span className="designTitle">
                  Create a consistent and scalable design language
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="designHeading2">Design Process:</h1>
          <ol className="list-decimal list-inside marker:font-medium space-y-8">
            <li>
              <span className="designTitleBold">Research &amp; Discovery</span>
              <p className="designTitle mb-2">
                The process began by analyzing business goals, defining success
                metrics, and reviewing product data from the existing web and
                PWA platforms. Stakeholder interviews and internal workshops
                helped align on constraints, priorities, and opportunities.
              </p>
            </li>
            <li>
              <span className="designTitleBold">
                Benchmarking &amp; Competitive Analysis
              </span>
              <p className="designTitle mb-2">
                Local and global crypto exchanges were analyzed to identify best
                practices in onboarding, trading flows, and asset presentation.
                This phase helped uncover gaps in the market and opportunities
                for differentiation in the mobile experience.
              </p>
            </li>
            <li>
              <span className="designTitleBold">
                Data Analysis &amp; User Insights
              </span>
              <p className="designTitle mb-2">
                Quantitative data (funnels, retention patterns) combined with
                qualitative insights from user feedback and support tickets
                highlighted recurring usability issues and behavioral patterns
                that needed to be addressed in the mobile app.
              </p>
            </li>
            <li>
              <span className="designTitleBold">
                Personas &amp; User Journeys
              </span>
              <p className="designTitle mb-2">
                User personas were created based on real behavioral data,
                representing different trading mindsets and experience levels.
                End-to-end user journeys were mapped to identify friction points
                across onboarding, trading, and portfolio management.
              </p>
            </li>
            <li>
              <span className="designTitleBold">
                Design System &amp; UI Foundation
              </span>
              <p className="designTitle mb-2">
                A structured design system was developed to ensure consistency
                and scalability. This included typography, color palette, core
                UI components, and interaction patterns tailored to a
                trading-focused application.
              </p>
            </li>
            <li>
              <span className="designTitleBold">
                Wireframes &amp; Visual Design
              </span>
              <p className="designTitle mb-2">
                Core screens were first explored through wireframes and
                interactive prototypes, then finalized through high-fidelity UI
                design. Visual decisions focused on clarity, hierarchy, and
                speed of interaction within a data-heavy environment.
              </p>
            </li>
          </ol>
        </div>
        <div>
          <h1 className="designHeading2">Outcome &amp; Current Status:</h1>
          <p className="designTitle">
            The result is a dedicated mobile app supported by a scalable design
            system and optimized trading flows. The product is currently in the
            evaluation phase, with early feedback and data guiding ongoing
            improvements and future roadmap decisions.
          </p>
        </div>
      </div>
    </PortfolioDetailLayout>
  );
}
