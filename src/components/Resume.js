import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div id="Resume" className="w-1/2 mt-64 text-justify ml-auto mr-60">
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">University of Colorado at Boulder</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Bachelor's in Physics
            </code>
            <br />
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Exotic Metals Forming Co</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Engineer - Kent, Washington{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• 2013 - 2018</code>
            <br />
            <code className="text-sm">
              <br />• Coordinate and direct projects, making detailed plans to accomplish goals and directing the integration of technical activities.
              <br />• Plan and establish sequence of operations to fabricate and assemble parts.
              <br />• Prepare documentation for new manufacturing processes or engineering procedures.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• 3D Modeling and Drafting.
              <br />• Geometric Dimensioning and Tolerancing.
              <br />• Laser Cutting and Welding.
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
