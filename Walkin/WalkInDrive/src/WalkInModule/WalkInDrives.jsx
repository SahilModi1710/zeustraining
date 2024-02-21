import React from "react";
import DriveCard from "../Cards/DriveCard/DriveCard";
import DriveDetails from "./DriveDetails";
import Review from "./Review/Review";

const WalkInDrives = () => {
  return (
    <>
      <div className="">
        <DriveCard />
        <DriveCard />
        <DriveCard />
      </div>
    </>
  );
};

export default WalkInDrives;
