import ImageSlider from "@/components/carosel/Slider";
import ExperienceCard from "@/components/GalleryCard";
import { DESIGNED } from "@/utils/datas";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col justify-between space-y-8">
      <ImageSlider
        array={DESIGNED.find((item) => item.id == 6)?.images.map(
          (item) => item
        )}
      />
      <div className="flex flex-col space-y-8">
        <h1 className="designHeading">Wellowork Health App</h1>
        <p className="designTitle">
          Employee Wellness App Design Project.
          <br />
          One of my clients reached out to me with a project idea focused on
          employee wellness in the workplace. The goal was to create an app that
          would allow employees to easily address any physical or mental health
          issues they might encounter during their workday. The app needed to
          enable users to request counseling, report feelings of depression,
          resolve conflicts with colleagues, or even request a doctor's visit
          for any physical ailments—simply by uploading medical records and
          requesting a consultation.
        </p>
        <div>
          <h1 className="designHeading2">Project Challenges and Goals:</h1>
          <p className="designTitle">
            The main challenge was to design an app that would be both
            functional and engaging, without overwhelming the user. The app
            needed to provide several features, including:
          </p>
          <div className="pl-4 md:pl-6">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="designTitleBold">
                  Mental health support (e.g., counseling for depression or
                  stress).
                </span>
              </li>
              <li>
                <span className="designTitleBold">
                  Conflict resolution (e.g., mediation with colleagues).
                </span>
              </li>
              <li>
                <span className="designTitleBold">
                  Physical health management (e.g., scheduling a doctor's
                  appointment).
                </span>
              </li>
            </ul>
          </div>
          <br />
          <p className="designTitle">
            My goal was to create an app that was both calming and functional,
            ensuring that users could easily access the help they needed without
            it feeling burdensome.
          </p>
        </div>
        <div>
          <h1 className="designHeading2">Design Solutions:</h1>
          <br />
          <ol className="list-decimal list-inside  marker:font-medium space-y-8">
            <li>
              <span className="designTitleBold">Empathy-Driven Research:</span>
              <p className="designTitle mb-2">
                I began by conducting research into common workplace health
                issues, including mental health struggles, physical health
                concerns, and work-related stress. Through surveys and user
                interviews, I identified the key needs and pain points employees
                face.
              </p>
            </li>
            <li>
              <span className="designTitleBold mb-2">
                Relaxing and Supportive UI Design:
              </span>
              <div className="pl-4 md:pl-8">
                <ul className="list-disc list-outside space-y-2">
                  <li>
                    <span className="designTitleBold">Color Palette: </span>
                    <p className="designTitle  ">
                      I selected soft colors, such as blues and greens, to evoke
                      feelings of calmness and trust.
                    </p>
                  </li>
                  <li>
                    <span className="designTitleBold">
                      Simple, User-Friendly Layout:
                    </span>{" "}
                    <p className="designTitle  ">
                      I kept the design clean and intuitive, with large buttons
                      and easy navigation, ensuring users could quickly access
                      features.
                    </p>
                  </li>
                  <li>
                    <span className="designTitleBold">
                      Engag ement Features:
                    </span>
                    <p className="designTitle  ">
                      I included stress-relief tools like origami crafting and
                      real-time meditation exercises to help users manage stress
                      instantly.
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span className="designTitleBold mb-2">
                Comprehensive Features for Mental and Physical Health:
              </span>
              <div className="pl-4 md:pl-8">
                <ul className="list-disc list-outside space-y-2">
                  <li>
                    <span className="designTitleBold">Instant Counseling:</span>
                    <p className="designTitle  ">
                      A section was added for online counseling and mental
                      health support, allowing employees to easily connect with
                      specialists.
                    </p>
                  </li>
                  <li>
                    <span className="designTitleBold">Health Requests: </span>
                    <p className="designTitle  ">
                      I designed a feature for employees to upload medical
                      records and easily request a doctor’s visit, ensuring a
                      seamless process for receiving medical care.
                    </p>
                  </li>
                  <li>
                    <span className="designTitleBold">
                      Stress-Relief Activities:{" "}
                    </span>
                    <p className="designTitle  ">
                      Real-time features like guided meditation and breathing
                      exercises were included to help users reduce stress.{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span className="designTitleBold">
                User Testing and Feedback Integration:
              </span>
              <p className="designTitle mb-2">
                After initial designs were completed, I conducted user testing
                to gather feedback. Based on this feedback, I refined the user
                interface and interactions to improve the overall user
                experience.
              </p>
            </li>
          </ol>
        </div>
        <div>
          <h1 className="designHeading2">Final Outcome:</h1>
          <p className="designTitle">
            The final product was an innovative app that effectively addressed
            both mental and physical health challenges in the workplace. By
            combining practical solutions, such as scheduling doctor's visits,
            with engaging features like stress-relief exercises and counseling,
            the app helped employees manage their well-being and navigate
            challenges in the workplace with ease.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-center mx-auto border-t-2 border-gray-200">
        {DESIGNED.filter((item) => item.id !== 6)?.map((item) => (
          <ExperienceCard {...item} key={item.title + item.id} hideTitle />
        ))}
      </div>
    </div>
  );
}
