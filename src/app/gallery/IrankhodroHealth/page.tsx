import React from "react";

function page() {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-medium text-gray2">
          Irankhodro Health Dashboard
        </h1>
        <p className="leading-7 text-lg whitespace-normal text-justify font-light">
          Employee Health Dashboard for Iran Khodro
          <br />
          The Employee Health Dashboard for Iran Khodro is a system designed to
          assess the health of employees and predict potential health issues
          they may face in the future. The dashboard evaluates employees' health
          based on factors such as age, work experience, and job difficulty.
          Each department within the company uses this information to estimate
          the health risks of its employees.
        </p>
        <div className="flex flex-col">
          <p className="leading-7 text-lg whitespace-normal text-justify font-light">
            Key Features of the Iran Khodro Employee Health Dashboard:{" "}
          </p>
          <ol className="list-decimal">
            <li>
              <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                Health Assessment of Employees:{" "}
              </span>
              <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                The dashboard utilizes data on employees' age, work history, and
                job type to evaluate their health and predict potential
                illnesses. This analysis helps identify specific health risks
                and enables preventive medical interventions.
              </p>
            </li>
            <li>
              <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                Simulation of Health Conditions:
              </span>
              <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                The system can simulate different working conditions based on
                age and experience to predict health risks and the likelihood of
                both physical and mental health issues. This allows for the
                design of health programs and preventive measures.{" "}
              </p>
            </li>
            <li>
              <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                Continuous Monitoring and Evaluation:{" "}
              </span>
              <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                The dashboard offers real-time updates and continuous monitoring
                of employees' health. Managers can stay informed about the
                health status of employees across different departments and take
                action promptly if needed.{" "}
              </p>
            </li>
            <li>
              <span className="pl-2 leading-7 text-lg whitespace-normal text-justify font-light">
                Recommendations and Alerts:
              </span>
              <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                Based on the data analysis, the system can provide
                recommendations for improving working conditions and preventing
                health issues. It also sends alerts in case of emergency
                situations or if immediate intervention is required.{" "}
              </p>
            </li>
          </ol>
        </div>

        {/*  */}
        <span>
          <p className="leading-7 text-lg whitespace-normal text-justify font-light">
            Benefits of This System:{" "}
          </p>
          <ul>
            <li>
              <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                Better Disease Prevention: With accurate data analysis and
                health predictions, this system helps Iran Khodro prevent health
                issues and improve employees' quality of life.{" "}
              </p>
            </li>
            <li>
              <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                Efficient Human Resources Management: Real-time, precise data
                allows for better management of human and medical resources.
              </p>
            </li>
            <li>
              <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
                Support for Strategic Decision Making: The dashboard aids
                managers in making better decisions regarding health policies
                and employee welfare programs.{" "}
              </p>
            </li>
          </ul>
        </span>

        {/*  */}
        <div>
          <h1 className="text-lg font-medium text-gray2">Final Outcome:</h1>
          <p className="pl-3 leading-7 text-lg whitespace-normal text-justify font-light">
            Overall, this system empowers managers and employees at Iran Khodro
            to manage health conditions more effectively and create a healthier
            work environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;