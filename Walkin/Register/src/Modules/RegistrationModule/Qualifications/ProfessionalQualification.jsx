import React, { useState } from "react";
import useQualificationStore from "../../../ReactStore/QualificationsStore";

const ProfessionalQualification = ({ review }) => {
  const [listUpQ, setListUpQ] = useState(true);
  const [showQualificationDialog, setShowQualificationDialog] = useState(true);

  const {
    isFresher,
    setIsFresher,
    experienceYear,
    setExperienceYear,
    currentCtc,
    setCurrentCtc,
    expectedCtc,
    setExpectedCtc,
    noticePeriod,
    setNoticePeriod,
    noticeEndDate,
    setNoticeEndDate,
    noticeDuration,
    setNoticeDuration,
    appliedTest,
    setAppliedTest,
    appliedRole,
    setAppliedRole,
    otherExpertiseTechnologies,
    setOtherExpertiseTechnologies,
    otherFamiliarTechnologies,
    setOtherFamiliarTechnologies,
    expertiseTechnology,
    setExpertiseTechnology,
    familiarTechnology,
    setFamiliarTechnology,
  } = useQualificationStore();

  const openBox2 = () => {
    setShowQualificationDialog(!showQualificationDialog);
    setListUpQ(!listUpQ);
  };

  const handleExpertiseTechnology = (technology) => {
    if (expertiseTechnology.includes(technology)) {
      setExpertiseTechnology(
        expertiseTechnology.filter(
          (selectTechnology) => selectTechnology !== technology
        )
      );
    } else {
      setExpertiseTechnology([...expertiseTechnology, technology]);
    }
  };

  const handleFamiliarTechnology = (technology) => {
    if (familiarTechnology.includes(technology)) {
      setFamiliarTechnology(
        familiarTechnology.filter(
          (selectTechnology) => selectTechnology !== technology
        )
      );
    } else {
      setFamiliarTechnology([...familiarTechnology, technology]);
    }
  };

  return (
    <>
      <div className="education-section ">
        <span className="heading">Professional Qualifications</span>
        <img
          src="../../../assets/icons/list-up.svg"
          alt="Expand"
          onClick={openBox2}
          style={{ display: listUpQ ? "block" : "none" }}
          className="heading-img"
        />
        <img
          className="extra-img"
          onClick={openBox2}
          src="../../../assets/icons/list-down.svg"
          alt="Collapse"
          style={{ display: listUpQ ? "none" : "block" }}
        />
      </div>

      <div
        className="applicant-type"
        style={{ display: showQualificationDialog ? "block" : "none" }}
      >
        <div className="applicant-label">Applicant Type *</div>
        <div className="types">
          <div className="radio-container">
            <input
              type="radio"
              name="fresher"
              id="fresher"
              disabled={review}
              className="input-element radio-element"
              style={review ? { border: "none" } : {}}
              onClick={() => {
                setIsFresher(true);
              }}
            />
            <label htmlFor="fresher" className="radio-group">
              Fresher
            </label>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              name="experience"
              id="experience"
              defaultChecked
              disabled={review}
              className="input-element radio-element"
              style={review ? { border: "none" } : {}}
              onClick={() => {
                setIsFresher(false);
              }}
            />
            <label htmlFor="experience" className="radio-group">
              Experience
            </label>
          </div>
        </div>
      </div>

      {showQualificationDialog && (
        <div className="education-card ">
          {!isFresher && (
            <div>
              <div className="input-group">
                <label htmlFor="experienceYear" className="input-label">
                  Years of Experience *
                </label>
                <input
                  className="number-input input-element"
                  type="number"
                  placeholder="5"
                  value={experienceYear}
                  name="experienceYear"
                  id="experienceYear"
                  disabled={review}
                  style={review ? { border: "none" } : {}}
                  onChange={(e) => {
                    setExperienceYear(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                <label htmlFor="currentCtc" className="input-label">
                  Current CTC * (In Rupees)
                </label>
                <input
                  className="number-input input-element"
                  type="number"
                  placeholder="500000"
                  value={currentCtc}
                  name="currentCtc"
                  id="currentCtc"
                  disabled={review}
                  style={review ? { border: "none" } : {}}
                  onChange={(e) => {
                    setCurrentCtc(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                <label htmlFor="expectedCtc" className="input-label">
                  Expected CTC * (In Rupees)
                </label>
                <input
                  className="number-input input-element"
                  type="number"
                  placeholder="6,50,000"
                  value={expectedCtc}
                  name="expectedCtc"
                  id="expectedCtc"
                  disabled={review}
                  style={review ? { border: "none" } : {}}
                  onChange={(e) => {
                    setExpectedCtc(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                <div className="input-label">
                  Select All The Technologies You Expertise In *
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="expertise-technology1"
                    id="expertise-technology1"
                    checked={expertiseTechnology.includes("Javascript")}
                    disabled={review}
                    className="input-element checkbox-group"
                    style={review ? { border: "none" } : {}}
                    onChange={() => handleExpertiseTechnology("Javascript")}
                  />

                  <label
                    htmlFor="expertise-technology1"
                    className="input-label checkbox-text"
                  >
                    Javascript
                  </label>
                </div>

                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="expertise-technology2"
                    id="expertise-technology2"
                    checked={expertiseTechnology.includes("Angular JS")}
                    disabled={review}
                    className="input-element checkbox-group"
                    style={review ? { border: "none" } : {}}
                    onChange={() => handleExpertiseTechnology("Angular JS")}
                  />
                  <label
                    htmlFor="expertise-technology2"
                    className="input-label checkbox-text"
                  >
                    Angular JS
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="expertise-technology3"
                    id="expertise-technology3"
                    checked={expertiseTechnology.includes("React")}
                    disabled={review}
                    className="input-element checkbox-group"
                    style={review ? { border: "none" } : {}}
                    onChange={() => handleExpertiseTechnology("React")}
                  />
                  <label
                    htmlFor="expertise-technology3"
                    className="input-label checkbox-text"
                  >
                    React
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="expertise-technology4"
                    id="expertise-technology4"
                    checked={expertiseTechnology.includes("Node JS")}
                    disabled={review}
                    className="input-element checkbox-group"
                    style={review ? { border: "none" } : {}}
                    onChange={() => handleExpertiseTechnology("Node JS")}
                  />
                  <label
                    htmlFor="expertise-technology4"
                    className="input-label checkbox-text"
                  >
                    Node JS
                  </label>
                </div>

                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="expertise-technology5"
                    id="expertise-technology5"
                    checked={expertiseTechnology.includes("Others")}
                    disabled={review}
                    className="input-element checkbox-group"
                    style={review ? { border: "none" } : {}}
                    onChange={() => handleExpertiseTechnology("Others")}
                  />
                  <label
                    htmlFor="expertise-technology5"
                    className="input-label checkbox-text"
                  >
                    Others
                  </label>
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="expertise-other" className="input-label">
                  If others, please mention
                </label>
                <input
                  style={{
                    width: "50%",
                    ...(review ? { border: "none" } : {}),
                  }}
                  type="text"
                  placeholder=""
                  defaultValue={otherExpertiseTechnologies}
                  name="expertise-other"
                  id="expertise-other"
                  className="input-element"
                  disabled={review}
                  onChange={(e) => {
                    setOtherExpertiseTechnologies(e.target.value);
                  }}
                />
              </div>
            </div>
          )}

          <div className="input-group">
            <div className="input-label">
              Select All The Technologies You Are Familiar In *
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                name="familiar-technology1"
                id="familiar-technology1"
                checked={familiarTechnology.includes("Javascript")}
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
                onChange={() => handleFamiliarTechnology("Javascript")}
              />
              <label
                htmlFor="familiar-technology1"
                className="input-label checkbox-text"
              >
                Javascript
              </label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                name="familiar-technology2"
                id="familiar-technology2"
                checked={familiarTechnology.includes("Angular JS")}
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
                onChange={() => handleFamiliarTechnology("Angular JS")}
              />
              <label
                htmlFor="familiar-technology2"
                className="input-label checkbox-text"
              >
                Angular JS
              </label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                name="familiar-technology3"
                id="familiar-technology3"
                checked={familiarTechnology.includes("React")}
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
                onChange={() => handleFamiliarTechnology("React")}
              />
              <label
                htmlFor="familiar-technology3"
                className="input-label checkbox-text"
              >
                React
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="familiar-technology4"
                id="familiar-technology4"
                checked={familiarTechnology.includes("Node JS")}
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
                onChange={() => handleFamiliarTechnology("Node JS")}
              />
              <label
                htmlFor="familiar-technology4"
                className="input-label checkbox-text"
              >
                Node JS
              </label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                name="familiar-technology5"
                id="familiar-technology5"
                checked={familiarTechnology.includes("Others")}
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
                onChange={() => handleFamiliarTechnology("Others")}
              />
              <label
                htmlFor="familiar-technology5"
                className="input-label checkbox-text"
              >
                Others
              </label>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="familiar-other" className="input-label">
              If others, please mention
            </label>
            <input
              style={{ width: "50%", ...(review ? { border: "none" } : {}) }}
              type="text"
              placeholder=""
              value={otherFamiliarTechnologies}
              name="familiar-other"
              id="familiar-other"
              className="input-element"
              disabled={review}
              onChange={(e) => {
                setOtherFamiliarTechnologies(e.target.value);
              }}
            />
          </div>

          {!isFresher && (
            <>
              <div
                className="applicant-type"
                style={{ padding: 0, margin: 0, marginTop: "40px" }}
              >
                <div className="applicant-label">
                  Are you currently on notice period? *
                </div>
                <div className="types">
                  <div className="radio-container">
                    <input
                      type="radio"
                      name="noticeperiod-yes"
                      id="noticeperiod-yes"
                      disabled={review}
                      className="input-element radio-element"
                      style={review ? { border: "none" } : {}}
                      checked={noticePeriod}
                      onChange={() => {
                        setNoticePeriod(true);
                      }}
                    />
                    <label htmlFor="noticeperiod-yes" className="radio-group">
                      Yes
                    </label>
                  </div>
                  <div className="radio-container">
                    <input
                      type="radio"
                      name="noticeperiod-no"
                      id="noticeperiod-no"
                      disabled={review}
                      className="input-element radio-element"
                      style={review ? { border: "none" } : {}}
                      checked={!noticePeriod}
                      onChange={() => {
                        setNoticePeriod(false);
                      }}
                    />
                    <label htmlFor="noticeperiod-no" className="radio-group">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="select-group">
                <div className="degree">
                  <div className="input-group">
                    <div className="input-label">
                      If Yes, when will your notice period end? *
                    </div>
                    <input
                      style={{
                        width: "98%",
                        ...(review ? { border: "none" } : {}),
                      }}
                      type="date"
                      placeholder="dd-mm-yyyy"
                      value={noticeEndDate}
                      name="noticePeriod-endDate"
                      id="noticePeriod-endDate"
                      disabled={review}
                      className="input-element"
                      onChange={(e) => {
                        setNoticeEndDate(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="stream">
                  <div className="input-group">
                    <div className="input-label">
                      How long is your notice period? * (Mention in months)
                    </div>
                    <select
                      disabled={review}
                      style={review ? { border: "none" } : {}}
                      name="notice-duration"
                      id="notice-duration"
                      className="qualification-select select-input"
                      value={noticeDuration}
                      onChange={(e) => {
                        setNoticeDuration(e.target.value);
                      }}
                    >
                      <option value="" className="vale">
                        2 months
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}
          <div
            className="applicant-type"
            style={{ padding: 0, margin: 0, marginTop: "40px" }}
          >
            <div className="applicant-label">
              Have You Appeared For Any Test By Zeus in the past 12 months? *
            </div>

            <div className="types">
              <div className="radio-container">
                <input
                  type="radio"
                  name="preAttempt"
                  id="preAttempt-yes"
                  disabled={review}
                  className="input-element radio-element"
                  style={review ? { border: "none" } : {}}
                  checked={appliedTest}
                  onChange={() => setAppliedTest(true)}
                />
                <label htmlFor="preAttempt-yes" className="radio-group">
                  Yes
                </label>
              </div>
              <div className="radio-container">
                <input
                  type="radio"
                  name="preAttempt"
                  id="preAttempt-no"
                  disabled={review}
                  className="input-element radio-element"
                  style={review ? { border: "none" } : {}}
                  checked={!appliedTest}
                  onChange={() => setAppliedTest(false)}
                />
                <label htmlFor="preAttempt-no" className="radio-group">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="appliedRole" className="input-label">
              If Yes, which role did you apply for?
            </label>
            <input
              style={{ width: "50%", ...(review ? { border: "none" } : {}) }}
              type="text"
              placeholder=""
              value={appliedRole}
              name="appliedRole"
              id="appliedRole"
              disabled={review}
              className="input-element"
              onChange={(e) => {
                setAppliedRole(e.target.value);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfessionalQualification;
