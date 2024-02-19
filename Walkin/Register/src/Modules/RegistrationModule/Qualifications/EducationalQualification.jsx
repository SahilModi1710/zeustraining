import React, { useState } from "react";

const EducationalQualification = ({ review }) => {
  const [showEducationDialog, setShowEducationDialog] = useState(true);
  const [listUpQ, setListUpQ] = useState(true);

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
            disabled={review}
            style={review ? { border: "none" } : {}}
          />

          <label htmlFor="year" className="input-label">
            Year of Passing*
          </label>
          <select
            name=""
            id=""
            className="number-input select-input"
            disabled={review}
            style={review ? { border: "none" } : {}}
          >
            <option value="2020" className="year">
              2020
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
                disabled={review}
                style={review ? { border: "none" } : {}}
              >
                <option
                  value="Bachelor in Technology (B.Tech)"
                  className="vale"
                >
                  Bachelor in Technology (B.Tech)
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
                disabled={review}
                style={review ? { border: "none" } : {}}
              >
                <option value="Information Technology" className="vale">
                  Information Technology
                </option>
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
                disabled={review}
                style={review ? { border: "none" } : {}}
              >
                <option
                  value="Pune Institute of Technology (PIT)"
                  className="vale"
                >
                  Pune Institute of Technology (PIT)
                </option>
              </select>
            </div>
          </div>
          <div className="stream">
            <div className="input-group">
              <label htmlFor="stream" className="input-label">
                If others, please enter your college name*
              </label>
              <input
                type="text"
                placeholder=""
                value=""
                name="stream"
                id="stream"
                className="input-element"
                disabled={review}
                style={review ? { border: "none" } : {}}
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
            value="Pune"
            name="location"
            id="location"
            className="university input-element"
            disabled={review}
            style={review ? { border: "none" } : {}}
          />
        </div>
      </div>
    </>
  );
};

export default EducationalQualification;
