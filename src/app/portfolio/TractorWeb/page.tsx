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
      <div className="flex flex-col space-y-8">
        <h1 className="designHeading">Tractor Fan Club Website</h1>
        <p className="designTitle">
          When redesigning the Tractor Club's official website, a structured
          product design process can be integrated to ensure the site meets user
          needs effectively while aligning with the club's goals. Below is a
          breakdown of the project into detailed sections and the steps within a
          comprehensive product design framework:
        </p>
        <ol className="list-decimal list-inside marker:font-medium space-y-8">
          <li>
            <span className="designHeading2">Research and Discovery</span>
            <p className="designTitle mb-2">
              Objective: Identify existing issues, understand user needs, and
              gather requirements for new features.
            </p>
            <div className="pl-4 md:pl-8">
              <ul className="list-disc list-outside space-y-2">
                <li>
                  <span className="designTitleBold">User Analysis:</span>
                  <p className="designTitle">
                    Conduct user interviews or surveys to identify challenges
                    with the current site. For example, users may struggle to
                    find match schedules or detailed league tables.
                  </p>
                </li>
                <li>
                  <span className="designTitleBold">Competitor Analysis:</span>
                  <p className="designTitle">
                    Research websites of other football clubs to see how they
                    present features like academy information, ticketing, and
                    standings.{" "}
                  </p>
                </li>
                <li>
                  <span className="designTitleBold">Data Analysis: </span>
                  <p className="designTitle">
                    Use site analytics (from the old site) to track user
                    behavior, identify high-bounce areas, and evaluate popular
                    features.
                  </p>
                </li>

                <li>
                  <span className="designTitleBold">
                    Stakeholder Collaboration:{" "}
                  </span>
                  <p className="designTitle">
                    Collect input from the club’s management, fans, and sponsors
                    to ensure the website reflects their priorities, such as
                    promoting the academy or driving ticket sales.
                  </p>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <span className="designHeading2">Feature Definition</span>
            <p className="designTitle mb-2">
              Objective: Outline specific functionalities for each section of
              the website.
            </p>
            <div className="pl-4 md:pl-8">
              <ul className="list-disc list-outside space-y-2">
                <li>
                  <span className="designTitleBold">Academy Section:</span>

                  <div className="pl-4 md:pl-6">
                    <ul className="list-disc list-outside space-y-2">
                      <li>
                        <span className="designTitle">
                          Display programs for youth teams, schedules, and
                          player profiles.
                        </span>
                      </li>
                      <li>
                        <span className="designTitle">
                          Display programs for youth teams, schedules, and
                          player profiles.
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="designTitleBold"> Upcoming Games:</span>

                  <div className="pl-4 md:pl-6">
                    <ul className="list-disc list-outside space-y-2">
                      <li>
                        <span className="designTitle">
                          Create a dynamic calendar with filters (e.g.,
                          competition, home/away).
                        </span>
                      </li>
                      <li>
                        <span className="designTitle">
                          Allow users to link games to their calendars or
                          receive reminders.
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <span className="designTitleBold"> League Tables:</span>
                  <div className="pl-4 md:pl-6">
                    <ul className="list-disc list-outside space-y-2">
                      <li>
                        <span className="designTitle">
                          Provide a visually clean table with real-time updates.
                        </span>
                      </li>
                      <li>
                        <span className="designTitle">
                          Include expandable sections for match results and
                          statistics.
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="designTitleBold">News & Media:</span>
                  <div className="pl-4 md:pl-6">
                    <ul className="list-disc list-outside space-y-2">
                      <li>
                        <span className="designTitle">
                          Centralize club news, video highlights, and press
                          releases.
                        </span>
                      </li>
                      <li>
                        <span className="designTitle">
                          Integrate sharing features for social media platforms.
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="designTitleBold">Ticketing System:</span>
                  <div className="pl-4 md:pl-6">
                    <ul className="list-disc list-outside space-y-2">
                      <li>
                        <span className="designTitle">
                          Ensure a user-friendly experience for purchasing match
                          tickets.
                        </span>
                      </li>
                      <li>
                        <span className="designTitle">
                          Include seat selection and a secure checkout process.
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <span className="designHeading2">Ideation and Wireframing</span>
            <p className="designTitle mb-2">
              Objective: Visualize solutions and test usability before
              development.
            </p>
            <div className="pl-4 md:pl-8">
              <ul className="list-disc list-outside space-y-2">
                <li>
                  <span className="designTitleBold">
                    Low-Fidelity Wireframes:
                  </span>
                  <p className="designTitle">
                    Sketch layouts for key pages (e.g., homepage, academy,
                    league tables). Focus on navigation and layout clarity.
                  </p>
                </li>
                <li>
                  <span className="designTitleBold"> User Flows:</span>
                  <p className="designTitle">
                    {" "}
                    Map out user journeys, like how a fan would purchase a
                    ticket or view upcoming matches.
                  </p>
                </li>
                <li>
                  <span className="designTitleBold"> Feedback Loop: </span>
                  <p className="designTitle">
                    Share prototypes with users and stakeholders for feedback,
                    refining the design iteratively.{" "}
                  </p>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <span className="designHeading2">Design Implementation</span>
            <p className="designTitle mb-2">
              Objective: Develop a cohesive visual and interaction design that
              aligns with the club’s brand.
            </p>
            <div className="pl-4 md:pl-8">
              <ul className="list-disc list-outside space-y-2">
                <li>
                  <span className="designTitleBold">UI Design:</span>
                  <p className="designTitle">
                    Use the club’s colors and branding. Prioritize readability,
                    especially for match schedules and league tables.{" "}
                  </p>
                </li>
                <li>
                  <span className="designHeading2">Responsive Design:</span>
                  <p className="designTitle">
                    {" "}
                    Ensure the site is fully functional on desktop, tablet, and
                    mobile devices.
                  </p>
                </li>
                <li>
                  <span className="designHeading2">Accessibility:</span>
                  <p className="designTitle">
                    Incorporate WCAG standards (e.g., alt texts, high contrast)
                    to make the site inclusive.
                  </p>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <span className="designHeading2">Testing and Validation</span>
            <p className="designTitle mb-2">
              Objective: Ensure the website functions seamlessly and meets user
              expectations.{" "}
            </p>
            <div className="pl-4 md:pl-8">
              <ul className="list-disc list-outside space-y-2">
                <li>
                  <span className="designTitleBold">Usability Testing:</span>
                  <p className="designTitle">
                    Test prototypes with fans, focusing on key tasks like ticket
                    purchases and schedule navigation.
                  </p>
                </li>
                <li>
                  <span className="designTitleBold">Performance Testing:</span>
                  <p className="designTitle">
                    Ensure the site loads quickly, even with heavy traffic
                    during major matches.
                  </p>
                </li>
                <li>
                  <span className="designTitleBold">Bug Fixing: </span>
                  <p className="designTitle">
                    Continuously identify and resolve issues during testing.
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ol>
        <p className="designTitle">
          This process ensures a structured approach to redesigning the website
          while keeping user experience and technical feasibility at the
          forefront.
        </p>
      </div>
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-center mx-auto border-t-2 border-gray-200">
        {DESIGNED.filter((item) => item.id !== 8)?.map((item) => (
          <ExperienceCard {...item} key={item.title + item.id} hideTitle />
        ))}
      </div>
    </div>
  );
}
