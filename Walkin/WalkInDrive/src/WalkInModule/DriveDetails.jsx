import React, { useEffect, useState } from "react";
import DriveCard from "../Cards/DriveCard/DriveCard";
import JobDetails from "../Cards/JobDetails/Jobdetails";
import TimeSlot from "../Cards/TimeSlot/TimeSlot";
import Prerequisites from "../Cards/Prerequisites/Prerequisites";
import { useParams } from "react-router-dom";
import { useDriveStore } from "../ReactStore/Store";

const DriveDetails = () => {
  const { guid } = useParams();
  const { drives } = useDriveStore();
  console.log(drives);

  const driveDetails = drives.find((drive) => drive.guid === guid);

  return (
    <>
      <DriveCard drive={true} driveDetails={driveDetails} />

      <Prerequisites />

      <TimeSlot driveDetails={driveDetails} />

      {driveDetails.jobRoles.map((jobDetails, index) => {
        return <JobDetails jobDetails={jobDetails} key={index} />;
      })}
    </>
  );
};

export default DriveDetails;
