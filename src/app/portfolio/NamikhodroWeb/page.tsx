import ImageSlider from "@/components/carosel/Slider";
import ExperienceCard from "@/components/GalleryCard";
import { DESIGNED } from "@/utils/datas";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col justify-between space-y-8">
      <ImageSlider
        array={DESIGNED.find((item) => item.id == 7)?.images.map(
          (item) => item
        )}
      />

      <div className="flex flex-col space-y-8">
        <h1 className="designHeading">Namikhodro E-commerce Website</h1>
        <p className="designTitle">
          Design Process for Nami Khodro Website
          <br />
          The design process for the Nami Khodro website, an e-commerce platform
          for selling Toyota cars in Iran, followed a structured approach that
          included several key stages: research, user experience (UX) design,
          user interface (UI) design, and implementation of technical features.
          The main objective was to ensure an easy, intuitive, and secure online
          car shopping experience, while also enhancing the brand presence of
          both Toyota and Nami Khodro.
        </p>
        <ol className="list-decimal list-inside marker:font-medium space-y-8">
          <li>
            <span className="designHeading2">
              {" "}
              Initial Research & Client Requirements:
            </span>
            <p className="designTitle mb-2">
              The first step in the design process was meeting with Nami Khodro
              to clearly understand their requirements. They wanted a website
              that displayed Toyota vehicles available for sale in Iran,
              complete with detailed specifications, pricing, and availability
              dates. In addition, they requested an electronic contract system
              to simplify and secure the purchase process. We also conducted
              competitor research to understand the best practices in the
              automotive e-commerce space.
            </p>
          </li>
          <li>
            <span className="designHeading2">User Experience (UX) Design:</span>
            <p className="designTitle mb-2">
              The goal during the UX design phase was to create a seamless
              experience for users to browse, select, and purchase their desired
              Toyota vehicle with minimal friction.
            </p>
            <div className="pl-4 md:pl-8">
              <ul className="list-disc list-outside space-y-2">
                <li>
                  <span className="designTitleBold">
                    {" "}
                    User Journey Mapping:
                  </span>
                  <p className="designTitle">
                    We created detailed user journey maps to visualize the steps
                    a customer would take from browsing cars to completing a
                    purchase. This helped us identify key touchpoints and
                    optimize them for simplicity.
                  </p>
                </li>
              </ul>
              <ul className="list-disc list-outside space-y-2">
                <li>
                  <span className="designTitleBold">
                    {" "}
                    Wireframes & Prototypes:
                  </span>
                  <p className="designTitle">
                    Using wireframing tools, we mapped out the layout of each
                    page, focusing on clear calls-to-action (CTAs) like “Add to
                    Cart” and “Request a Quote.” We also created prototypes to
                    test the flow of the website before moving into the visual
                    design phase.
                  </p>
                </li>
              </ul>
              <ul className="list-disc list-outside space-y-2">
                <li>
                  <span className="designTitleBold">Mobile-First Design:</span>
                  <p className="designTitle">
                    Considering the high usage of mobile devices, we prioritized
                    a mobile-first approach to ensure the website was fully
                    responsive and provided a great experience across all device
                    types.
                  </p>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <span className="designHeading2">User Interface (UI) Design:</span>
            <p className="designTitle mb-2">
              For the UI design phase, we focused on creating a modern, clean,
              and professional interface that aligned with both Toyota's and
              Naeem Khodro's branding.
            </p>
            <div className="pl-4 md:pl-8">
              <ul className="list-disc list-outside space-y-2">
                <li>
                  <span className="designTitleBold">
                    {" "}
                    Branding Integration:
                  </span>
                  <p className="designTitle">
                    The website was designed using Toyota's official branding
                    colors and fonts while also integrating Naeem Khodro's
                    corporate colors to create a cohesive brand identity. This
                    ensured that users could easily identify the dealership
                    while browsing Toyota vehicles.
                  </p>
                </li>
              </ul>

              <ul className="list-disc list-outside space-y-2">
                <li>
                  <span className="designTitleBold">
                    {" "}
                    Product Pages Design:
                  </span>
                  <p className="designTitle">
                    Each vehicle was given a dedicated product page with
                    high-quality images, detailed specifications, and key
                    features, making it easy for customers to make informed
                    decisions. The release date of each model was clearly
                    displayed to ensure transparency.
                  </p>
                </li>
              </ul>

              <ul className="list-disc list-outside space-y-2">
                <li>
                  <span className="designTitleBold">
                    Visual Elements & Layout:
                  </span>
                  <p className="designTitle">
                    The design incorporated clean, easy-to-read typography, and
                    strategically placed images of vehicles. Buttons were
                    clearly visible to guide users through the purchase journey
                    smoothly.
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span className="designHeading2">Technical Implementation:</span>
            <p className="designTitle mb-2">
              Once the design was finalized, the development team implemented
              the technical features of the website.
            </p>
            <div className="pl-4 md:pl-8">
              <ul className="list-disc list-outside space-y-2">
                <li>
                  <span className="designTitleBold">
                    Electronic Contract System:
                  </span>
                  <p className="designTitle">
                    {" "}
                    A significant feature of the website was the electronic
                    contract system. Customers could sign contracts digitally,
                    making the car-buying process faster and more secure. This
                    system was built to handle personal data securely and ensure
                    compliance with legal standards.
                  </p>
                </li>
                <li>
                  <span className="designTitleBold">
                    Online Payment Integration:
                  </span>
                  <p className="designTitle">
                    The website was integrated with secure online payment
                    systems, allowing customers to complete their purchase
                    directly on the site.
                  </p>
                </li>
                <li>
                  <span className="designTitleBold">
                    Website Testing & Optimization:
                  </span>
                  <p className="designTitle">
                    Prior to launch, the site was rigorously tested to ensure it
                    worked seamlessly across all devices and browsers. We paid
                    close attention to optimizing loading times and enhancing
                    site speed, especially for mobile users.
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span className="designHeading2">Evaluation & Feedback:</span>
            <p className="designTitle mb-2">
              After the website was launched, we monitored its performance using
              analytics tools to track user behavior. We also collected feedback
              from customers to identify areas for improvement and refine the
              site over time.
            </p>
          </li>
        </ol>
        <div>
          <h1 className="designHeading2">Final Outcome:</h1>
          <p className=" designTitle">
            The Nami Khodro website successfully streamlined the online car
            buying process, allowing customers to browse Toyota vehicles, learn
            about their features, and make secure purchases. The integration of
            the electronic contract system helped simplify the buying process,
            while the clear branding and professional design boosted both
            Toyota's and Naeem Khodro's presence online. The responsive,
            mobile-friendly design ensured that users had an optimal experience
            regardless of the device they used.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-center mx-auto border-t-2 border-gray-200">
        {DESIGNED.filter((item) => item.id !== 7)?.map((item) => (
          <ExperienceCard {...item} key={item.title + item.id} hideTitle />
        ))}
      </div>
    </div>
  );
}
