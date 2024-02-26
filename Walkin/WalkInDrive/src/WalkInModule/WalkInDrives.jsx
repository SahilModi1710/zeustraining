import React, { useEffect, useState } from "react";
import DriveCard from "../Cards/DriveCard/DriveCard";
import axios from "axios";
import { useDriveStore } from "../ReactStore/Store";

const WalkInDrives = () => {
  // const [drives, setDrives] = useState([]);
  const { drives, fetchDrives } = useDriveStore();

  useEffect(() => {
    const fetchData = async () => {
      const driveRequest = {
        info: {
          fieldName: "AllWalkInDrives",
        },

        arguments: {
          input: {},
        },
      };

      try {
        const response = await axios.post(
          "http://localhost:4000/dev/api/handle_graphql",
          driveRequest
        );

        console.log(response.data);
        fetchDrives(response.data);
      } catch (error) {
        console.error("Error in fetchData:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="">
        {drives.map((drive, index) => {
          return <DriveCard driveDetails={drive} key={index} />;
        })}
      </div>
    </>
  );
};

export default WalkInDrives;
