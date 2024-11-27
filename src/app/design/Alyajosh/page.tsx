import ImageSlider from "@/components/carosel/Slider";
import ExperienceCard from "@/components/GalleryCard";
import { DESIGNED } from "@/utils/datas";

export default function Page() {
  return (
    <div className="flex flex-col justify-between space-y-8">
      <ImageSlider
        array={DESIGNED.find((item) => item.id == 3)?.images.map(
          (item) => item
        )}
      />
      <div className="flex flex-col space-y-8">
        <h1 className="designHeading">Alyajosh Task Manager App</h1>
        <p className="designTitle">
          Here’s an expanded version of your description with an emphasis on the
          design process for the Task Manager App for Aria Joush:
          <br />
          Task Manager App for Aria Joush Employees
          <br />
          The Task Manager App for Aria Joush was developed with a clear focus
          on helping employees within the organization efficiently plan, manage,
          and track their tasks. The goal of the app is to simplify work
          processes and foster a more productive, collaborative environment. The
          app not only includes task management features but also incorporates
          internal chat functionality to encourage team communication, which was
          specifically requested by the client.
        </p>
        <h1 className="designHeading2">Design Process:</h1>
        <ol className="list-decimal list-inside marker:font-medium space-y-4">
          <li>
            <span className="designTitleBold">
              User Research & Requirement Gathering:
            </span>
            <p className="designTitle mb-2">
              The first step in the design process involved understanding the
              needs of the employees and the organization. I conducted
              discussions with the client and key stakeholders to gather
              requirements for the app. This phase also involved interviewing
              potential users to understand their workflows, pain points, and
              preferred methods of managing tasks. Based on this feedback, I
              created user personas and journey maps to help guide the design
              process and ensure the app addressed real-world challenges.
            </p>
          </li>
          <li>
            <span className="designTitleBold">
              Information Architecture & Wireframing:
            </span>
            <p className="designTitle mb-2">
              After defining the user requirements, I focused on creating an
              intuitive information architecture (IA) for the app. This involved
              structuring the navigation flow in a way that was simple, logical,
              and easy for users to follow. I then created wireframes for the
              app's key screens, ensuring that important features such as task
              creation, editing, and the internal chat function were accessible
              and easy to use. The goal was to minimize the steps required to
              complete common actions, such as task assignment or chatting with
              a colleague.
            </p>
          </li>
          <li>
            <span className="designTitleBold">Prototyping & User Testing:</span>
            <p className="designTitle mb-2">
              With the wireframes in place, I developed an interactive prototype
              to visualize the app's layout and functionality. This prototype
              was tested with a small group of employees from the organization
              to gather feedback on usability and design. I observed how they
              interacted with the prototype and identified any areas where users
              encountered difficulties or confusion. Based on this feedback, I
              made several iterations to improve the flow, button placements,
              and overall user experience.
            </p>
          </li>
          <li>
            <span className="designTitleBold"> UI/UX Design & Branding:</span>
            <p className="designTitle mb-2">
              Once the core structure was solidified, I focused on the user
              interface (UI) design. The app needed to feel intuitive, engaging,
              and align with the company's brand identity. I selected a color
              scheme that reflected the company’s culture and was both
              professional and approachable. The interface was designed with a
              clean, modern aesthetic that ensured tasks and chat features were
              highlighted clearly. I incorporated subtle animations to make
              transitions smooth and enjoyable for the user. The design also
              included responsive layouts to ensure usability across different
              devices, especially mobile, where employees would likely access
              the app most frequently.
            </p>
          </li>
          <li>
            <span className="designTitleBold">Implementation & Launch:</span>
            <p className="designTitle mb-2">
              {" "}
              After finalizing the design, the development team worked on
              implementing the app, and I collaborated closely with them to
              ensure the design vision was maintained throughout the coding
              process. Once the app was developed, I conducted further testing
              to identify and fix any bugs or inconsistencies before launching.
              The app was officially rolled out to the employees of Aria Joush,
              where it immediately began improving task management and
              communication within the organization.
            </p>
          </li>
        </ol>

        <h1 className="designHeading2">
          Key Features of the Task Manager App:
        </h1>
        <ol className="list-decimal list-inside marker:font-medium space-y-4">
          <li>
            <span className="designTitleBold">
              Task Planning & Registration:{" "}
            </span>
            <p className="designTitle mb-2">
              Employees can create and prioritize tasks within the app. Each
              task can be assigned to specific individuals, and due dates can be
              set to ensure deadlines are met. The app also provides reminders
              for upcoming tasks to help employees stay on track.
            </p>
          </li>{" "}
          <li>
            <span className="designTitleBold">
              Intra-Organizational Chat Integration:
            </span>
            <p className="designTitle mb-2">
              To promote collaboration and quick communication, the app includes
              an internal chat feature. Employees can send messages, share
              documents, and discuss tasks directly within the app without
              switching between different platforms. This makes communication
              more seamless and ensures that everyone stays on the same page.
            </p>
          </li>{" "}
          <li>
            <span className="designTitleBold">User-Friendly Interface:</span>
            <p className="designTitle mb-2">
              The design of the app focuses on simplicity and usability,
              ensuring that employees can quickly adapt to it without a steep
              learning curve. The task management tools are easy to navigate,
              and the chat feature is integrated smoothly into the workflow, so
              it doesn’t interrupt the task management process.
            </p>
          </li>{" "}
          <li>
            <span className="designTitleBold"> Customization Options:</span>
            <p className="designTitle mb-2">
              To cater to the specific needs of the organization, the app allows
              for some level of customization. This includes adjusting
              workflows, task categories, and notifications to better fit the
              company’s culture and internal processes.
            </p>
          </li>
        </ol>

        <div>
          <h1 className="designHeading2">Final Outcome:</h1>
          <p className="designTitle">
            The Task Manager App successfully addresses the task management and
            communication needs of Aria Joush employees. By integrating task
            tracking with an internal chat function, the app fosters a
            collaborative and efficient work environment. Employees can now
            easily plan their tasks, communicate with team members, and manage
            their workload in a single platform. The app’s intuitive design and
            responsive interface have led to higher engagement and productivity
            within the organization.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-center mx-auto border-t-2 border-gray-200">
        {DESIGNED.filter((item) => item.id !== 3)?.map((item) => (
          <ExperienceCard {...item} key={item.title + item.id} hideTitle />
        ))}
      </div>
    </div>
  );
}
