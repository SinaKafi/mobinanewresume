import React from "react";

const designDetailLayout = () => {
  return (
    <div>
      <div className="flex flex-col space-y-8">
        <h1 className="designHeading">maintitle</h1>
        <p className="designTitle">description</p>
        <h1 className="designHeading2"></h1>
        <ol className="list-decimal list-inside marker:font-medium space-y-8">
          <li>
            <span className="designTitleBold">title 2</span>
            <p className="designTitle mb-2">list</p>
            <div className="pl-4 md:pl-8">
              <ul className="list-disc list-outside space-y-2">
                <li>
                  <span className="designTitleBold"></span>
                  <p className="designTitle"></p>
                </li>
              </ul>
            </div>
          </li>
        </ol>
        <div>
          <h1 className="designHeading2">Final Outcome:</h1>
          <p className="designTitle">{}</p>
        </div>
      </div>
    </div>
  );
};

export default designDetailLayout;
