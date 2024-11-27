// export default page;
import ImageSlider from "@/components/carosel/Slider";
import ExperienceCard from "@/components/GalleryCard";
import { DESIGNED } from "@/utils/datas";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col justify-between space-y-8">
      <ImageSlider
        array={DESIGNED.find((item) => item.id == 4)?.images.map(
          (item) => item
        )}
      />
      <div className="flex flex-col space-y-8">
        <h1 className="designHeading">Irankhodro Health Dashboard</h1>
        <p className="designTitle">
          Employee Health Dashboard for Iran Khodro
          <br />
          The Employee Health Dashboard for Iran Khodro is a system designed to
          assess the health of employees and predict potential health issues
          they may face in the future. The dashboard evaluates employees' health
          based on factors such as age, work experience, and job difficulty.
          Each department within the company uses this information to estimate
          the health risks of its employees.
        </p>
        <h1 className="designHeading2">
          Key Features of the Iran Khodro Employee Health Dashboard:
        </h1>
        <ol className="list-decimal list-inside marker:font-medium space-y-8">
          <li>
            <span className="designTitleBold">
              {" "}
              Health Assessment of Employees:
            </span>
            <p className="designTitle mb-2">
              {" "}
              The dashboard utilizes data on employees' age, work history, and
              job type to evaluate their health and predict potential illnesses.
              This analysis helps identify specific health risks and enables
              preventive medical
            </p>
          </li>
          <li>
            <span className="designTitleBold">
              interventions. Simulation of Health Conditions:
            </span>
            <p className="designTitle mb-2">
              The system can simulate different working conditions based on age
              and experience to predict health risks and the likelihood of both
              physical and mental health issues. This allows for the design of
              health programs and preventive measures.
            </p>
          </li>
          <li>
            <span className="designTitleBold">
              Continuous Monitoring and Evaluation:
            </span>
            <p className="designTitle mb-2">
              The dashboard offers real-time updates and continuous monitoring
              of employees' health. Managers can stay informed about the health
              status of employees across different departments and take action
              promptly if needed.
            </p>
          </li>
          <li>
            <span className="designTitleBold">Recommendations and Alerts:</span>
            <p className="designTitle mb-2">
              Based on the data analysis, the system can provide recommendations
              for improving working conditions and preventing health issues. It
              also sends alerts in case of emergency situations or if immediate
              intervention is required.
            </p>
          </li>
        </ol>

        <h1 className="designHeading2">Benefits of This System: </h1>
        <div className="">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="designTitleBold">
                Better Disease Prevention:
              </span>
              <p className="designTitle">
                With accurate data analysis and health predictions, this system
                helps Iran Khodro prevent health issues and improve employees'
                quality of life. Efficient Human
              </p>
            </li>
            <li>
              <span className="designTitleBold">Resources Management:</span>
              <p className="designTitle">
                {" "}
                Real-time, precise data allows for better management of human
                and medical resources. Support for Strategic
              </p>
            </li>
            <li>
              <span className="designTitleBold">Decision Making:</span>
              <p className="designTitle">
                The dashboard aids managers in making better decisions regarding
                health policies and employee welfare programs.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="designHeading2">Final Outcome:</h1>
          <p className="designTitle">
            Overall, this system empowers managers and employees at Iran Khodro
            to manage health conditions more effectively and create a healthier
            work environment.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-center mx-auto border-t-2 border-gray-200">
        {DESIGNED.filter((item) => item.id !== 4)?.map((item) => (
          <ExperienceCard {...item} key={item.title + item.id} hideTitle />
        ))}
      </div>
    </div>
  );
}

export default Page;
