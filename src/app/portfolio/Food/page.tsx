import PortfolioDetailLayout from '@/components/portfolio/PortfolioDetailLayout';
import { createPageMetadata } from '@/lib/metadata';
import { DESIGNED } from '@/utils/datas';
import React from 'react';

export const metadata = createPageMetadata({
  title: 'Food E-commerce Landing',
  description:
    'UI/UX case study for a food e-commerce landing page with product categorization.',
  path: '/portfolio/Food',
});

function Page() {
  const project = DESIGNED.find((item) => item.id === 1);

  return (
    <PortfolioDetailLayout
      projectId={1}
      images={project?.images}
      title={project?.title}
    >
      <div className="flex flex-col space-y-8">
        <h1 className="designHeading">Food E-commerce Landing</h1>
        <p className="designTitle">
          In one of my design projects, the main focus was on creating a landing
          page for a food e-commerce platform, designed to showcase my expertise
          in user interface (UI) design and structuring product categories
          effectively.
        </p>
        <div>
          <h1 className="designHeading2">Project Overview:</h1>
          <p className="designTitle">
            The goal of this project was to create a visually appealing and
            user-friendly landing page centered around food product
            categorization. The design aimed to simplify user navigation and
            provide an engaging experience. Key aspects of the project included:
          </p>
        </div>
        <div>
          <h1 className="designHeading2">Focus on Categorization:</h1>
          <p className="designTitle">
            I developed a clear and intuitive categorization system, enabling
            users to find products effortlessly. Categories like "Fruits &
            Vegetables," "Protein Products," and "Organic Foods" were
            thoughtfully designed and implemented.
          </p>
        </div>
        <div>
          <h1 className="designHeading2">Product Card Design:</h1>
          <p className="designTitle">
            I designed multiple variations of product cards to display essential
            details such as product image, name, price, weight, and additional
            information. Each card was optimized to highlight critical details
            at a glance.
          </p>
        </div>
        <div>
          <h1 className="designHeading2"> Color and Image Selection:</h1>
          <p className="designTitle">
            Color and Image Selection: I used warm, natural colors (such as
            greens and yellows) to evoke freshness and health. High-resolution
            product images were carefully chosen to enhance visual appeal.
          </p>
        </div>
        <div>
          <h1 className="designHeading2">Information Architecture:</h1>
          <p className="designTitle">
            The page was structured logically to minimize user confusion. Users
            could easily access products via search, filters, or intuitive
            navigation through categories.
          </p>
        </div>
        <div>
          <h1 className="designHeading2">Final Outcome:</h1>
          <p className="designTitle">
            This project highlights my ability to design user-focused interfaces
            with an emphasis on product categorization and effective information
            architecture. The result was a landing page that combines visual
            appeal with a streamlined, intuitive user experience.
          </p>
        </div>
      </div>
    </PortfolioDetailLayout>
  );
}

export default Page;
