// import ImageSlider from "@/components/carosel/Slider";
// import { DESIGNED } from "@/utils/datas";
// import Image from "next/image";

// interface PageProps {
//   params: {
//     name: string; // Matches the dynamic route segment in the URL
//   };
// }

// export default async function Page() {
//   return (
//     <>
//       <div className="flex flex-col gap-8">
//         <h1 className="text-2xl font-medium text-gray2">
//           Moeinkhodro E-commerce Website{" "}
//         </h1>
//         <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//           Here’s a detailed description for the e-commerce website for Moein
//           Khodro, which can be included in your portfolio:
//           <br />
//           E-commerce Website for Moein Khodro - Toyota Car Dealership
//           <br />
//           The Moein Khodro website was designed as an e-commerce platform to
//           facilitate the sale of Toyota vehicles in Iran. The primary goal of
//           the site was to provide potential customers with a seamless browsing
//           experience, allowing them to easily explore available Toyota models,
//           view specifications, and make informed purchasing decisions. The
//           website also incorporated features to streamline the buying process,
//           including an electronic contract system to ensure secure transactions
//           between the buyer and seller.
//         </p>
//         <h1 className="text-lg font-medium text-gray2">
//           Key Features & Design Approach:{" "}
//         </h1>
//         <ol className="list-decimal marker:font-medium pl-6">
//           <li>
//             <h1 className="text-lg font-medium text-gray2">
//               Vehicle Showcase:
//             </h1>
//             <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//               One of the main features of the website was a comprehensive
//               catalog of Toyota vehicles available for sale in Iran. Each
//               product page displayed detailed specifications of the vehicles,
//               including engine details, features, available variants, and
//               prices. This allowed customers to view all the necessary
//               information before making a purchase decision. Each model also had
//               clear availability dates, so customers were informed about the
//               launch schedule and could plan accordingly.{" "}
//             </p>
//           </li>
//           <li>
//             <h1 className="text-lg font-medium text-gray2">
//               User-Friendly Interface & Smooth Navigation:
//             </h1>
//             <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//               The website was designed with a focus on usability, ensuring that
//               visitors could easily navigate through different car models,
//               categories, and available features. I used an intuitive layout
//               with clear call-to-action buttons such as "Add to Cart" and
//               "Request a Quote." This streamlined the customer journey, from
//               browsing to purchasing.
//             </p>
//           </li>
//           <li>
//             <h1 className="text-lg font-medium text-gray2">
//               Electronic Contract Integration:
//             </h1>
//             <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//               A key feature requested by the client was the inclusion of an
//               electronic contract system, which allowed customers to digitally
//               sign an agreement upon purchasing a vehicle. This step was crucial
//               to simplify the buying process and ensure a legally binding
//               commitment without requiring physical paperwork. This feature
//               enhanced the security and convenience of transactions.
//             </p>
//           </li>{" "}
//           <li>
//             <h1 className="text-lg font-medium text-gray2">
//               Branding and Visual Identity:{" "}
//             </h1>
//             <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//               The design of the website incorporated the corporate colors of
//               Moien Khodro alongside the Toyota brand's official colors. This
//               helped create a cohesive visual identity, strengthening the
//               representation of both the Toyota brand and the dealership itself.
//               The use of high-quality images and visuals of Toyota cars enhanced
//               the overall aesthetic of the site while keeping the design
//               professional and modern.{" "}
//             </p>
//           </li>{" "}
//           <li>
//             <h1 className="text-lg font-medium text-gray2">
//               Mobile-Friendly & Responsive Design:
//             </h1>
//             <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//               Understanding that many customers would access the website from
//               mobile devices, the site was developed with a responsive design to
//               ensure optimal performance on smartphones and tablets. This
//               allowed users to browse, read product details, and make purchases
//               easily from any device.{" "}
//             </p>
//           </li>
//           <li>
//             <h1 className="text-lg font-medium text-gray2">
//               Smooth Checkout & Payment Process:
//             </h1>
//             <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//               The checkout process was designed to be straightforward and
//               secure, with various payment methods available. Customers could
//               seamlessly add vehicles to their shopping cart, enter delivery
//               details, and complete the transaction in just a few steps.
//             </p>
//           </li>
//         </ol>

//         <div>
//           <h1 className="text-lg font-medium text-gray2"> Outcome:</h1>
//           <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//             The Moein Khodro website successfully addressed the needs of both
//             the dealership and the customers. By offering a clear and
//             informative platform, customers could easily explore Toyota vehicles
//             and make purchases online with confidence. The integration of an
//             electronic contract system further simplified the buying process,
//             making it easier for both the dealership and the customer to
//             complete transactions securely. The use of brand-consistent design
//             elements also helped establish trust and brand recognition for both
//             Toyota and Moien Khodro.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
import ImageSlider from "@/components/carosel/Slider";
import { DESIGNED } from "@/utils/datas";
import Image from "next/image";

interface PageProps {
  params: {
    name: string; // Matches the dynamic route segment in the URL
  };
}

export default async function Page() {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl md:text-3xl font-medium text-gray2">
          Moeinkhodro E-commerce Website
        </h1>
        <p className="text-base md:text-lg leading-7 text-gray2 text-justify font-light">
          Here’s a detailed description for the e-commerce website for Moein
          Khodro, which can be included in your portfolio:
          <br />
          <strong>
            E-commerce Website for Moein Khodro - Toyota Car Dealership
          </strong>
          <br />
          The Moein Khodro website was designed as an e-commerce platform to
          facilitate the sale of Toyota vehicles in Iran. The primary goal of
          the site was to provide potential customers with a seamless browsing
          experience, allowing them to easily explore available Toyota models,
          view specifications, and make informed purchasing decisions. The
          website also incorporated features to streamline the buying process,
          including an electronic contract system to ensure secure transactions
          between the buyer and seller.
        </p>

        <h2 className="text-xl md:text-2xl font-medium text-gray2">
          Key Features & Design Approach
        </h2>
        <ol className="list-decimal pl-6">
          <li className="mb-4">
            <h3 className="text-lg md:text-xl font-medium text-gray2">
              Vehicle Showcase
            </h3>
            <p className="text-base md:text-lg leading-7 text-gray2 text-justify font-light">
              One of the main features of the website was a comprehensive
              catalog of Toyota vehicles available for sale in Iran. Each
              product page displayed detailed specifications of the vehicles,
              including engine details, features, available variants, and
              prices. This allowed customers to view all the necessary
              information before making a purchase decision. Each model also had
              clear availability dates, so customers were informed about the
              launch schedule and could plan accordingly.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-lg md:text-xl font-medium text-gray2">
              User-Friendly Interface & Smooth Navigation
            </h3>
            <p className="text-base md:text-lg leading-7 text-gray2 text-justify font-light">
              The website was designed with a focus on usability, ensuring that
              visitors could easily navigate through different car models,
              categories, and available features. I used an intuitive layout
              with clear call-to-action buttons such as "Add to Cart" and
              "Request a Quote." This streamlined the customer journey, from
              browsing to purchasing.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-lg md:text-xl font-medium text-gray2">
              Electronic Contract Integration
            </h3>
            <p className="text-base md:text-lg leading-7 text-gray2 text-justify font-light">
              A key feature requested by the client was the inclusion of an
              electronic contract system, which allowed customers to digitally
              sign an agreement upon purchasing a vehicle. This step was crucial
              to simplify the buying process and ensure a legally binding
              commitment without requiring physical paperwork. This feature
              enhanced the security and convenience of transactions.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-lg md:text-xl font-medium text-gray2">
              Branding and Visual Identity
            </h3>
            <p className="text-base md:text-lg leading-7 text-gray2 text-justify font-light">
              The design of the website incorporated the corporate colors of
              Moien Khodro alongside the Toyota brand's official colors. This
              helped create a cohesive visual identity, strengthening the
              representation of both the Toyota brand and the dealership itself.
              The use of high-quality images and visuals of Toyota cars enhanced
              the overall aesthetic of the site while keeping the design
              professional and modern.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-lg md:text-xl font-medium text-gray2">
              Mobile-Friendly & Responsive Design
            </h3>
            <p className="text-base md:text-lg leading-7 text-gray2 text-justify font-light">
              Understanding that many customers would access the website from
              mobile devices, the site was developed with a responsive design to
              ensure optimal performance on smartphones and tablets. This
              allowed users to browse, read product details, and make purchases
              easily from any device.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-lg md:text-xl font-medium text-gray2">
              Smooth Checkout & Payment Process
            </h3>
            <p className="text-base md:text-lg leading-7 text-gray2 text-justify font-light">
              The checkout process was designed to be straightforward and
              secure, with various payment methods available. Customers could
              seamlessly add vehicles to their shopping cart, enter delivery
              details, and complete the transaction in just a few steps.
            </p>
          </li>
        </ol>

        <div>
          <h2 className="text-xl md:text-2xl font-medium text-gray2">
            Outcome
          </h2>
          <p className="text-base md:text-lg leading-7 text-gray2 text-justify font-light">
            The Moein Khodro website successfully addressed the needs of both
            the dealership and the customers. By offering a clear and
            informative platform, customers could easily explore Toyota vehicles
            and make purchases online with confidence. The integration of an
            electronic contract system further simplified the buying process,
            making it easier for both the dealership and the customer to
            complete transactions securely. The use of brand-consistent design
            elements also helped establish trust and brand recognition for both
            Toyota and Moien Khodro.
          </p>
        </div>
      </div>
    </div>
  );
}
