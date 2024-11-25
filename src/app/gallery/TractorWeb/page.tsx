export default async function Page() {
  return (
    <>
      <div className="flex flex-col gap-8">
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
        <div className="flex flex-col ">
          <h1 className="text-lg font-medium text-gray2">
            1. Research and Discovery
          </h1>
          <span>
            <p className="leading-7 text-lg whitespace-normal text-justify font-light">
              Objective: Identify existing issues, understand user needs, and
              gather requirements for new features.
            </p>
            <ul>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  User Analysis:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Conduct user interviews or surveys to identify challenges with
                  the current site. For example, users may struggle to find
                  match schedules or detailed league tables.
                </p>
              </li>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Competitor Analysis:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Research websites of other football clubs to see how they
                  present features like academy information, ticketing, and
                  standings.
                </p>
              </li>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Data Analysis:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Use site analytics (from the old site) to track user behavior,
                  identify high-bounce areas, and evaluate popular features.
                </p>
              </li>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Stakeholder Collaboration:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Collect input from the club’s management, fans, and sponsors
                  to ensure the website reflects their priorities, such as
                  promoting the academy or driving ticket sales.
                </p>
              </li>
            </ul>
          </span>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-lg font-medium text-gray2">
            2. Feature Definition
          </h1>
          <span>
            <p className="leading-7 text-lg whitespace-normal text-justify font-light">
              Objective: Outline specific functionalities for each section of
              the website.
            </p>
            <ul>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Academy Section:
                </span>
                <ul>
                  <li>
                    <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                      Display programs for youth teams, schedules, and player
                      profiles.
                    </p>
                  </li>
                  <li>
                    <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                      Include a sign-up or inquiry form for aspiring athletes or
                      parents.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Upcoming Games :
                </span>
                <ul>
                  <li>
                    <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                      Create a dynamic calendar with filters (e.g., competition,
                      home/away).
                    </p>
                  </li>
                  <li>
                    <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                      Allow users to link games to their calendars or receive
                      reminders.
                    </p>
                  </li>
                </ul>
              </li>
              {/*
               */}
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  League Tables:
                </span>
                <ul>
                  <li>
                    <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                      Provide a visually clean table with real-time updates.
                    </p>
                  </li>
                  <li>
                    <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                      Include expandable sections for match results and
                      statistics.
                    </p>
                  </li>
                </ul>
              </li>
              {/*  */}
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  News & Media:
                </span>
                <ul>
                  <li>
                    <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                      Centralize club news, video highlights, and press
                      releases.
                    </p>
                  </li>
                  <li>
                    <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                      Integrate sharing features for social media platforms.
                    </p>
                  </li>
                </ul>
              </li>
              {/*  */}
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Ticketing System:
                </span>
                <ul>
                  <li>
                    <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                      Ensure a user-friendly experience for purchasing match
                      tickets.
                    </p>
                  </li>
                  <li>
                    <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                      Allow users to link games to their calendars or Include
                      seat selection and a secure checkout process.
                    </p>
                  </li>
                </ul>
              </li>
              {/*  */}
            </ul>
          </span>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-lg font-medium text-gray2">
            3. Ideation and Wireframing
          </h1>
          <span>
            <p className="leading-7 text-lg whitespace-normal text-justify font-light">
              Objective: Visualize solutions and test usability before
              development.
            </p>
            <ul>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Low-Fidelity Wireframes:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Sketch layouts for key pages (e.g., homepage, academy, league
                  tables). Focus on navigation and layout clarity.
                </p>
              </li>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  User Flows:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Map out user journeys, like how a fan would purchase a ticket
                  or view upcoming matches.
                </p>
              </li>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Feedback Loop:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Share prototypes with users and stakeholders for feedback,
                  refining the design iteratively.
                </p>
              </li>
            </ul>
          </span>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-lg font-medium text-gray2">
            4. Design Implementation
          </h1>
          <span>
            <p className="leading-7 text-lg whitespace-normal text-justify font-light">
              Objective: Develop a cohesive visual and interaction design that
              aligns with the club’s brand.
            </p>
            <ul>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  UI Design:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Use the club’s colors and branding. Prioritize readability,
                  especially for match schedules and league tables.
                </p>
              </li>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Responsive Design:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Ensure the site is fully functional on desktop, tablet, and
                  mobile devices.
                </p>
              </li>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Accessibility:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Incorporate WCAG standards (e.g., alt texts, high contrast) to
                  make the site inclusive.
                </p>
              </li>
            </ul>
          </span>
        </div>

        <div className="flex flex-col ">
          <h1 className="text-lg font-medium text-gray2">
            4. Design Implementation
          </h1>
          <span>
            <p className="leading-7 text-lg whitespace-normal text-justify font-light">
              Objective: Develop a cohesive visual and interaction design that
              aligns with the club’s brand.
            </p>
            <ul>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  UI Design:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Use the club’s colors and branding. Prioritize readability,
                  especially for match schedules and league tables.
                </p>
              </li>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Responsive Design:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Ensure the site is fully functional on desktop, tablet, and
                  mobile devices.
                </p>
              </li>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Accessibility:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Incorporate WCAG standards (e.g., alt texts, high contrast) to
                  make the site inclusive.
                </p>
              </li>
            </ul>
          </span>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-lg font-medium text-gray2">
            5. Testing and Validation
          </h1>
          <span>
            <p className="leading-7 text-lg whitespace-normal text-justify font-light">
              Objective: Ensure the website functions seamlessly and meets user
              expectations.
            </p>
            <ul>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Usability Testing:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Test prototypes with fans, focusing on key tasks like ticket
                  purchases and schedule navigation.
                </p>
              </li>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Performance Testing:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Ensure the site loads quickly, even with heavy traffic during
                  major matches.
                </p>
              </li>
              <li>
                <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                  Bug Fixing:
                </span>
                <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                  Continuously identify and resolve issues during testing.
                </p>
              </li>
            </ul>
          </span>
        </div>
        <p className="leading-7 text-lg whitespace-normal text-justify font-light">
          This process ensures a structured approach to redesigning the website
          while keeping user experience and technical feasibility at the
          forefront.
        </p>
      </div>
    </>
  );
}
