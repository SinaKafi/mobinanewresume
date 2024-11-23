import { strict } from "assert";
import { title } from "process";
import React from "react";
interface IJobCard {
  name: string;
  role: string;
  description: any;
  fromDate: string;
  toDate: string;
}
const JobCard: React.FC<IJobCard> = ({
  fromDate,
  name,
  role,
  toDate,
  description,
}) => {
  return (
    <div className="grid grid-cols-3 hover:!text-blue-600">
      <div className="col-span-1 flex flex-col items-start justify-start gap-4">
        <h1 className=" font-medium text-2xl text-gray2">{name}</h1>
        <h3 className=" text-xl font-light text-foreground whitespace-pre-line">
          {role}
        </h3>
        <p className=" text-gray1 text-lg font-normal">
          {fromDate} - {toDate}
        </p>
      </div>
      <div className="col-span-2 text-justify  whitespace-pre-line text-lg font-light leading-8 text-foreground">
        {" "}
        {description}
      </div>
    </div>
  );
};

export default JobCard;
