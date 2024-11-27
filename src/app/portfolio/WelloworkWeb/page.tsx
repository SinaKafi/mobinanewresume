// export default page;
import ImageSlider from "@/components/carosel/Slider";
import ExperienceCard from "@/components/GalleryCard";
import { DESIGNED } from "@/utils/datas";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col justify-between space-y-8">
      <ImageSlider
        array={DESIGNED.find((item) => item.id == 5)?.images.map(
          (item) => item
        )}
      />

      <div className="flex flex-col space-y-8">
        <h1 className="designHeading">Wellowork Website</h1>
        <p className="designTitle">
          Here’s a description for the landing page you designed for the
          employee wellness app, which you can use in your product design
          portfolio:
          <br />
          Landing Page Design for Employee Wellness App.
          <br />
          As part of the Employee Wellness App project, I was tasked with
          designing a landing page that effectively communicated the app's core
          features, value proposition, and the key stakeholders involved in the
          project. The goal was to provide visitors with a concise yet engaging
          overview of the app while establishing credibility and trust with
          potential users, investors, and stakeholders.
        </p>

        <h1 className="designHeading2">
          Key Features of the Landing Page Design:
        </h1>
        <ol className="list-decimal list-inside marker:font-medium space-y-8">
          <li>
            <span className="designTitleBold">Core Features Overview:</span>
            <p className="designTitle mb-2">
              {" "}
              The landing page succinctly highlighted the app’s key
              features—such as mental health support, physical health
              management, and stress-relief activities. Each feature was
              presented with intuitive icons and short descriptions to ensure
              that users could quickly understand the value of the app at a
              glance. I used engaging visuals and clear typography to break down
              information and make it digestible without overwhelming the user.
            </p>
          </li>
          <li>
            <span className="designTitleBold">User-Centric Design:</span>
            <p className="designTitle mb-2">
              {" "}
              I focused on creating a user-friendly experience for visitors,
              ensuring the landing page was visually appealing and easy to
              navigate. The layout included interactive elements such as sliding
              carousels for testimonials, quick links to app features, and
              sections for getting started. The goal was to engage users
              immediately and guide them through the key information smoothly.
            </p>
          </li>{" "}
          <li>
            <span className="designTitleBold">
              Highlighting Key Stakeholders:
            </span>
            <p className="designTitle mb-2">
              A critical element of the landing page was showcasing the managers
              and stakeholders behind the project. This section helped build
              credibility and trust by introducing the individuals who were
              instrumental in the app’s development. I designed professional
              portraits alongside their roles and contributions, adding a
              personal touch and making the project feel more grounded and
              authentic.
            </p>
          </li>{" "}
          <li>
            <span className="designTitleBold">Call to Action (CTA):</span>
            <p className="designTitle mb-2">
              A prominent call to action was strategically placed throughout the
              page, urging visitors to download the app or contact the team for
              more information. These CTAs were designed to be visually
              appealing, with action-oriented copy that encouraged immediate
              engagement.
            </p>
          </li>{" "}
          <li>
            <span className="designTitleBold">Branding and Visual Design:</span>
            <p className="designTitle mb-2">
              The design was aligned with the app’s branding, using soothing
              colors and simple, modern design elements to evoke a sense of calm
              and wellness. The overall aesthetic was minimalistic, ensuring
              that the message of health and well-being was the focal point.
            </p>
          </li>
        </ol>
        <div>
          <h1 className="designHeading2">Final Outcome:</h1>
          <p className="designTitle">
            The landing page served as a powerful tool for introducing the app
            to potential users, stakeholders, and investors. By clearly
            outlining the app’s features, showcasing the project’s leadership,
            and providing easy access to the next steps, the landing page helped
            drive engagement and encouraged users to take action.
            <br />
            Overall, the landing page was designed with a focus on clarity,
            engagement, and trust, ensuring that visitors had a seamless
            experience while learning about the app and its impact on workplace
            wellness.
            <br />
            This description emphasizes your role in designing the landing page,
            showcasing your ability to create a functional and engaging web
            presence that aligns with the goals of the product and meets the
            needs of multiple audiences.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-center mx-auto border-t-2 border-gray-200">
        {DESIGNED.filter((item) => item.id !== 5)?.map((item) => (
          <ExperienceCard {...item} key={item.title + item.id} hideTitle />
        ))}
      </div>
    </div>
  );
}

export default Page;
