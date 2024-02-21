import React, { useState } from "react";
import DriveCard from "../Cards/DriveCard/DriveCard";
import JobDetails from "../Cards/JobDetails/Jobdetails";
import TimeSlot from "../Cards/TimeSlot/TimeSlot";
import Prerequisites from "../Cards/Prerequisites/Prerequisites";

const DriveDetails = () => {
  return (
    <>
      <DriveCard driveDetails={true} />

      <Prerequisites />

      <TimeSlot />

      <JobDetails />
      <JobDetails />
      <JobDetails />

      {/* <a className="gototop" href="#top">
        <img src="../../../assets/arrow_upward_black_24dp.svg" alt="" />
      </a> */}
    </>
  );
};

export default DriveDetails;
