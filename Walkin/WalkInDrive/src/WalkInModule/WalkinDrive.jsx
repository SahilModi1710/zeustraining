import React from "react";
import WalkInDrives from "./WalkInDrives";
import { Route, Routes } from "react-router-dom";
import DriveDetails from "./DriveDetails";
import Review from "./Review/Review";

const WalkinDrive = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<WalkInDrives />} />
        <Route path="/:guid" element={<DriveDetails />} />
        <Route path="/review" element={<Review />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default WalkinDrive;
