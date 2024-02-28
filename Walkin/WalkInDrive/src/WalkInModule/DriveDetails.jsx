import React, { useEffect, useState } from "react";
import axios from "axios";
import DriveCard from "../Cards/DriveCard/DriveCard";
import JobDetails from "../Cards/JobDetails/Jobdetails";
import TimeSlot from "../Cards/TimeSlot/TimeSlot";
import Prerequisites from "../Cards/Prerequisites/Prerequisites";
import { useParams } from "react-router-dom";
import { useDriveStore } from "../ReactStore/Store";

const DriveDetails = () => {
  const { guid } = useParams();
  const [driveDetails, setDriveDetails] = useState(null);

  const fetchSingleDrive = async () => {
    const query = `
      query  DriveDetailsByID($guid: String!) {
        DriveDetailsByID(guid: $guid) {
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
        {
          query,
          variables: { guid },
        },
        {
          headers: {
            "x-api-key": "dummy-api-key",
          },
        }
      );

      setDriveDetails(response.data.data.DriveDetailsByID);
    } catch (error) {
      console.error("Error in fetchData:", error.message);
    }
  };

  useEffect(() => {
    fetchSingleDrive();
  }, []);

  return (
    <>
      {driveDetails && (
        <>
          <DriveCard drive={true} driveDetails={driveDetails} />
          <Prerequisites />
          <TimeSlot driveDetails={driveDetails} />

          {driveDetails.jobRoles.map((jobRole, index) => (
            <JobDetails key={index} jobDetails={jobRole} />
          ))}
        </>
      )}
    </>
  );
};

export default DriveDetails;
