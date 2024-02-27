import React from "react";
import useQualificationStore from "../../../ReactStore/QualificationsStore";
import { useRegisterStore } from "../../../ReactStore/Store";

const EducationalQualification = ({ review }) => {
  const { userDetails } = useRegisterStore();

  const {
    showEducationDialog,
    listUpQ,
    percentage,
    year,
    qualification,
    stream,
    college,
    otherCollege,
    location,
    setShowEducationDialog,
    setListUpQ,
    setPercentage,
    setYear,
    setQualification,
    setStream,
    setCollege,
    setOtherCollege,
    setLocation,
  } = useQualificationStore();

  // console.log(userDetails);

  // console.log(percentage, year, qualification, stream, college, location);

  const openBox1 = () => {
    setShowEducationDialog(!showEducationDialog);
    setListUpQ(!listUpQ);
  };

  return (
    <>
      <div className="education-section">
        <span className="heading">Educational Qualifications</span>
        <img
          src="../../../assets/icons/list-up.svg"
          alt="Expand"
          onClick={openBox1}
          style={{ display: listUpQ ? "block" : "none" }}
          className="heading-img"
        />
        <img
          className="extra-img"
          onClick={openBox1}
          src="../../../assets/icons/list-down.svg"
          alt="Collapse"
          style={{ display: listUpQ ? "none" : "block" }}
        />
      </div>

      <div
        className="education-card"
        style={{ display: showEducationDialog ? "block" : "none" }}
      >
        <div className="input-group">
          <label htmlFor="percentage" className="input-label">
            Aggregate Percentage*
          </label>
          <input
            type="text"
            className="number-input input-element"
            name="percentage"
            id="percentage"
            value={percentage}
            onChange={(e) => {
              setPercentage(e.target.value);
            }}
          />

          <label htmlFor="year" className="input-label">
            Year of Passing*
          </label>
          <select
            name="year"
            id="year"
            className="number-input select-input"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          >
            <option value="2020" className="year">
              2020
            </option>
            <option value="2021" className="year">
              2021
            </option>
          </select>
        </div>

        <div className="select-group">
          <div className="degree">
            <div className="input-group">
              <label htmlFor="qualification" className="input-label">
                Qualification*
              </label>
              <select
                name="qualification"
                id="qualification"
                className="qualification-select select-input"
                value={qualification}
                onChange={(e) => {
                  setQualification(e.target.value);
                }}
                disabled={review}
                style={review ? { border: "none" } : {}}
              >
                <option value="Bachelor in Technology (B.Tech)">
                  Bachelor in Technology (B.Tech)
                </option>
                <option value="Bachelor in Technology (B.arch)">
                  Bachelor in Technology (B.arch)
                </option>
              </select>
            </div>
          </div>
          <div className="stream">
            <div className="input-group">
              <label htmlFor="stream" className="input-label">
                Stream*
              </label>
              <select
                name="stream"
                id="stream"
                className="qualification-select select-input"
                value={stream}
                onChange={(e) => {
                  setStream(e.target.value);
                }}
                disabled={review}
                style={review ? { border: "none" } : {}}
              >
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Computer science">Computer Science</option>
              </select>
            </div>
          </div>
        </div>

        <div className="select-group">
          <div className="degree">
            <div className="input-group">
              <label htmlFor="college" className="input-label">
                College*
              </label>
              <select
                name="college"
                id="college"
                className="qualification-select select-input"
                value={college}
                onChange={(e) => {
                  setCollege(e.target.value);
                }}
                disabled={review}
                style={review ? { border: "none" } : {}}
              >
                <option value="Pune Institute of Technology (PIT)">
                  Pune Institute of Technology (PIT)
                </option>
                <option value="BITS">BITS</option>
                <option value="Others" className="vale">
                  Others
                </option>
              </select>
            </div>
          </div>
          <div className="stream">
            <div className="input-group">
              <label htmlFor="otherCollege" className="input-label">
                If others, please enter your college name*
              </label>
              <input
                type="text"
                placeholder=""
                value={college === "Others" ? otherCollege : ""}
                name="otherCollege"
                id="otherCollege"
                className="input-element"
                disabled={review || college !== "Others"}
                style={review ? { border: "none" } : {}}
                onChange={(e) => {
                  setOtherCollege(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="location" className="input-label">
            Where is your college located?*
          </label>
          <input
            type="text"
            placeholder="Pune"
            value={location}
            name="location"
            id="location"
            className="university input-element"
            disabled={review}
            style={review ? { border: "none" } : {}}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default EducationalQualification;
