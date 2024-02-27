import React, { useEffect } from "react";
import DriveCard from "../Cards/DriveCard/DriveCard";
import axios from "axios";
import { useDriveStore } from "../ReactStore/Store";

const WalkInDrives = () => {
  const { drives, fetchDrives } = useDriveStore();

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        query {
          AllWalkInDrives {
            id
            guid
            drive_title
            start_date
            end_date
            location
            jobRoles {
              id
              job_title
              package
              job_description
              job_requirements
            }
            timeSlots {
              id
              time_slot
            }
          }
        }
      `;

      try {
        const response = await axios.post(
          "http://localhost:5000/graphql",
          { query },
          {
            headers: {
              "x-api-key": "dummy-api-key",
            },
          }
        );

        console.log(response.data);
        fetchDrives(response.data.data.AllWalkInDrives);
      } catch (error) {
        console.error("Error in fetchData:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      {drives.map((drive, index) => (
        <DriveCard driveDetails={drive} key={index} />
      ))}
    </div>
  );
};

export default WalkInDrives;
