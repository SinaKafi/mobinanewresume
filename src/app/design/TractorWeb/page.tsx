// import ExperienceCard from "@/components/GalleryCard";
// import { DESIGNED } from "@/utils/datas";

// export default async function Page() {
//   return (
//     <div className="flex flex-col justify-between gap-y-11">
//       <div className="flex flex-col gap-8">
//         <h1 className="text-2xl font-medium text-gray2">
//           Tractor Fan Club Website
//         </h1>
//         <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//           When redesigning the Tractor Club's official website, a structured
//           product design process can be integrated to ensure the site meets user
//           needs effectively while aligning with the club's goals. Below is a
//           breakdown of the project into detailed sections and the steps within a
//           comprehensive product design framework:
//         </p>
//         <div className="flex flex-col ">
//           <h1 className="text-lg font-medium text-gray2">
//             1. Research and Discovery
//           </h1>
//           <span>
//             <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//               Objective: Identify existing issues, understand user needs, and
//               gather requirements for new features.
//             </p>
//             <ul>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   User Analysis:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Conduct user interviews or surveys to identify challenges with
//                   the current site. For example, users may struggle to find
//                   match schedules or detailed league tables.
//                 </p>
//               </li>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Competitor Analysis:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Research websites of other football clubs to see how they
//                   present features like academy information, ticketing, and
//                   standings.
//                 </p>
//               </li>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Data Analysis:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Use site analytics (from the old site) to track user behavior,
//                   identify high-bounce areas, and evaluate popular features.
//                 </p>
//               </li>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Stakeholder Collaboration:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Collect input from the club’s management, fans, and sponsors
//                   to ensure the website reflects their priorities, such as
//                   promoting the academy or driving ticket sales.
//                 </p>
//               </li>
//             </ul>
//           </span>
//         </div>
//         <div className="flex flex-col ">
//           <h1 className="text-lg font-medium text-gray2">
//             2. Feature Definition
//           </h1>
//           <span>
//             <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//               Objective: Outline specific functionalities for each section of
//               the website.
//             </p>
//             <ul>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Academy Section:
//                 </span>
//                 <ul>
//                   <li>
//                     <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                       Display programs for youth teams, schedules, and player
//                       profiles.
//                     </p>
//                   </li>
//                   <li>
//                     <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                       Include a sign-up or inquiry form for aspiring athletes or
//                       parents.
//                     </p>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Upcoming Games :
//                 </span>
//                 <ul>
//                   <li>
//                     <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                       Create a dynamic calendar with filters (e.g., competition,
//                       home/away).
//                     </p>
//                   </li>
//                   <li>
//                     <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                       Allow users to link games to their calendars or receive
//                       reminders.
//                     </p>
//                   </li>
//                 </ul>
//               </li>
//               {/*
//                */}
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   League Tables:
//                 </span>
//                 <ul>
//                   <li>
//                     <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                       Provide a visually clean table with real-time updates.
//                     </p>
//                   </li>
//                   <li>
//                     <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                       Include expandable sections for match results and
//                       statistics.
//                     </p>
//                   </li>
//                 </ul>
//               </li>
//               {/*  */}
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   News & Media:
//                 </span>
//                 <ul>
//                   <li>
//                     <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                       Centralize club news, video highlights, and press
//                       releases.
//                     </p>
//                   </li>
//                   <li>
//                     <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                       Integrate sharing features for social media platforms.
//                     </p>
//                   </li>
//                 </ul>
//               </li>
//               {/*  */}
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Ticketing System:
//                 </span>
//                 <ul>
//                   <li>
//                     <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                       Ensure a user-friendly experience for purchasing match
//                       tickets.
//                     </p>
//                   </li>
//                   <li>
//                     <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                       Allow users to link games to their calendars or Include
//                       seat selection and a secure checkout process.
//                     </p>
//                   </li>
//                 </ul>
//               </li>
//               {/*  */}
//             </ul>
//           </span>
//         </div>
//         <div className="flex flex-col ">
//           <h1 className="text-lg font-medium text-gray2">
//             3. Ideation and Wireframing
//           </h1>
//           <span>
//             <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//               Objective: Visualize solutions and test usability before
//               development.
//             </p>
//             <ul>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Low-Fidelity Wireframes:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Sketch layouts for key pages (e.g., homepage, academy, league
//                   tables). Focus on navigation and layout clarity.
//                 </p>
//               </li>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   User Flows:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Map out user journeys, like how a fan would purchase a ticket
//                   or view upcoming matches.
//                 </p>
//               </li>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Feedback Loop:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Share prototypes with users and stakeholders for feedback,
//                   refining the design iteratively.
//                 </p>
//               </li>
//             </ul>
//           </span>
//         </div>
//         <div className="flex flex-col ">
//           <h1 className="text-lg font-medium text-gray2">
//             4. Design Implementation
//           </h1>
//           <span>
//             <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//               Objective: Develop a cohesive visual and interaction design that
//               aligns with the club’s brand.
//             </p>
//             <ul>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   UI Design:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Use the club’s colors and branding. Prioritize readability,
//                   especially for match schedules and league tables.
//                 </p>
//               </li>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Responsive Design:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Ensure the site is fully functional on desktop, tablet, and
//                   mobile devices.
//                 </p>
//               </li>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Accessibility:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Incorporate WCAG standards (e.g., alt texts, high contrast) to
//                   make the site inclusive.
//                 </p>
//               </li>
//             </ul>
//           </span>
//         </div>

//         <div className="flex flex-col ">
//           <h1 className="text-lg font-medium text-gray2">
//             4. Design Implementation
//           </h1>
//           <span>
//             <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//               Objective: Develop a cohesive visual and interaction design that
//               aligns with the club’s brand.
//             </p>
//             <ul>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   UI Design:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Use the club’s colors and branding. Prioritize readability,
//                   especially for match schedules and league tables.
//                 </p>
//               </li>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Responsive Design:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Ensure the site is fully functional on desktop, tablet, and
//                   mobile devices.
//                 </p>
//               </li>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Accessibility:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Incorporate WCAG standards (e.g., alt texts, high contrast) to
//                   make the site inclusive.
//                 </p>
//               </li>
//             </ul>
//           </span>
//         </div>
//         <div className="flex flex-col ">
//           <h1 className="text-lg font-medium text-gray2">
//             5. Testing and Validation
//           </h1>
//           <span>
//             <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//               Objective: Ensure the website functions seamlessly and meets user
//               expectations.
//             </p>
//             <ul>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Usability Testing:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Test prototypes with fans, focusing on key tasks like ticket
//                   purchases and schedule navigation.
//                 </p>
//               </li>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Performance Testing:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Ensure the site loads quickly, even with heavy traffic during
//                   major matches.
//                 </p>
//               </li>
//               <li>
//                 <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Bug Fixing:
//                 </span>
//                 <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
//                   Continuously identify and resolve issues during testing.
//                 </p>
//               </li>
//             </ul>
//           </span>
//         </div>
//         <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//           This process ensures a structured approach to redesigning the website
//           while keeping user experience and technical feasibility at the
//           forefront.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-center mx-auto border-t-2 border-gray2 mt-16">
//         {DESIGNED.filter((item) => item.id !== 8)?.map((item) => (
//           <ExperienceCard {...item} key={item.title + item.id} hideTitle />
//         ))}
//       </div>
//     </div>
//   );
// }
import ImageSlider from "@/components/carosel/Slider";
import ExperienceCard from "@/components/GalleryCard";
import { DESIGNED } from "@/utils/datas";

export default async function Page() {
  return (
    <div className="flex flex-col justify-between gap-y-11">
      <ImageSlider
        array={DESIGNED.find((item) => item.id == 8)?.images.map(
          (item) => item
        )}
      />
      <div className="flex flex-col space-y-16">
        <h1 className="text-2xl font-medium text-gray2">
          Tractor Fan Club Website
        </h1>
        <p className="leading-7 text-lg whitespace-normal text-justify font-light">
          When redesigning the Tractor Club's official website, a structured
          product design process can be integrated to ensure the site meets user
          needs effectively while aligning with the club's goals. Below is a
          breakdown of the project into detailed sections and the steps within a
          comprehensive product design framework:
        </p>
        <div className="flex flex-col space-y-4">
          <h1 className="text-lg font-medium text-gray2 sm:text-xl">
            1. Research and Discovery
          </h1>
          <div>
            <p className="text-lg leading-7 text-gray2 font-light text-justify">
              Objective: Identify existing issues, understand user needs, and
              gather requirements for new features.
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  User Analysis:
                </span>
                <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                  Conduct user interviews or surveys to identify challenges with
                  the current site. For example, users may struggle to find
                  match schedules or detailed league tables.
                </p>
              </li>
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  Competitor Analysis:
                </span>
                <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                  Research websites of other football clubs to see how they
                  present features like academy information, ticketing, and
                  standings.
                </p>
              </li>
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  Data Analysis:
                </span>
                <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                  Use site analytics (from the old site) to track user behavior,
                  identify high-bounce areas, and evaluate popular features.
                </p>
              </li>
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  Stakeholder Collaboration:
                </span>
                <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                  Collect input from the club’s management, fans, and sponsors
                  to ensure the website reflects their priorities, such as
                  promoting the academy or driving ticket sales.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-lg font-medium text-gray2 sm:text-xl">
            2. Feature Definition
          </h1>
          <div>
            <p className="text-lg leading-7 text-gray2 font-light text-justify">
              Objective: Outline specific functionalities for each section of
              the website.
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  Academy Section:
                </span>
                <ul className="mt-2 space-y-2">
                  <li>
                    <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                      Display programs for youth teams, schedules, and player
                      profiles.
                    </p>
                  </li>
                  <li>
                    <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                      Include a sign-up or inquiry form for aspiring athletes or
                      parents.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  Upcoming Games:
                </span>
                <ul className="mt-2 space-y-2">
                  <li>
                    <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                      Create a dynamic calendar with filters (e.g., competition,
                      home/away).
                    </p>
                  </li>
                  <li>
                    <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                      Allow users to link games to their calendars or receive
                      reminders.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  League Tables:
                </span>
                <ul className="mt-2 space-y-2">
                  <li>
                    <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                      Provide a visually clean table with real-time updates.
                    </p>
                  </li>
                  <li>
                    <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                      Include expandable sections for match results and
                      statistics.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  News & Media:
                </span>
                <ul className="mt-2 space-y-2">
                  <li>
                    <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                      Centralize club news, video highlights, and press
                      releases.
                    </p>
                  </li>
                  <li>
                    <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                      Integrate sharing features for social media platforms.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  Ticketing System:
                </span>
                <ul className="mt-2 space-y-2">
                  <li>
                    <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                      Ensure a user-friendly experience for purchasing match
                      tickets.
                    </p>
                  </li>
                  <li>
                    <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                      Include seat selection and a secure checkout process.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-lg font-medium text-gray2 sm:text-xl">
            3. Ideation and Wireframing
          </h1>
          <div>
            <p className="text-lg leading-7 text-gray2 font-light text-justify">
              Objective: Visualize solutions and test usability before
              development.
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  Low-Fidelity Wireframes:
                </span>
                <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                  Sketch layouts for key pages (e.g., homepage, academy, league
                  tables). Focus on navigation and layout clarity.
                </p>
              </li>
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  User Flows:
                </span>
                <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                  Map out user journeys, like how a fan would purchase a ticket
                  or view upcoming matches.
                </p>
              </li>
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  Feedback Loop:
                </span>
                <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                  Share prototypes with users and stakeholders for feedback,
                  refining the design iteratively.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-lg font-medium text-gray2 sm:text-xl">
            4. Design Implementation
          </h1>
          <div>
            <p className="text-lg leading-7 text-gray2 font-light text-justify">
              Objective: Develop a cohesive visual and interaction design that
              aligns with the club’s brand.
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  UI Design:
                </span>
                <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                  Use the club’s colors and branding. Prioritize readability,
                  especially for match schedules and league tables.
                </p>
              </li>
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  Responsive Design:
                </span>
                <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                  Ensure the site is fully functional on desktop, tablet, and
                  mobile devices.
                </p>
              </li>
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  Accessibility:
                </span>
                <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                  Incorporate WCAG standards (e.g., alt texts, high contrast) to
                  make the site inclusive.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-lg font-medium text-gray2 sm:text-xl">
            5. Testing and Validation
          </h1>
          <div>
            <p className="text-lg leading-7 text-gray2 font-light text-justify">
              Objective: Ensure the website functions seamlessly and meets user
              expectations.
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  Usability Testing:
                </span>
                <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                  Test prototypes with fans, focusing on key tasks like ticket
                  purchases and schedule navigation.
                </p>
              </li>
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  Performance Testing:
                </span>
                <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                  Ensure the site loads quickly, even with heavy traffic during
                  major matches.
                </p>
              </li>
              <li>
                <span className="block pl-2 text-lg font-medium text-gray2">
                  Bug Fixing:
                </span>
                <p className="pl-3 text-lg font-light leading-7 text-gray2 text-justify">
                  Continuously identify and resolve issues during testing.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <p className="leading-7 text-lg whitespace-normal text-justify font-light">
          This process ensures a structured approach to redesigning the website
          while keeping user experience and technical feasibility at the
          forefront.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-center mx-auto border-t-2 border-gray-200">
        {DESIGNED.filter((item) => item.id !== 8)?.map((item) => (
          <ExperienceCard {...item} key={item.title + item.id} hideTitle />
        ))}
      </div>
    </div>
  );
}
