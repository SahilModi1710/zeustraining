import React, { useState } from "react";

const ProfessionalQualification = ({ review }) => {
  const [listUpQ, setListUpQ] = useState(true);
  const [showQualificationDialog, setShowQualificationDialog] = useState(true);

  const openBox2 = () => {
    setShowQualificationDialog(!showQualificationDialog);
    setListUpQ(!listUpQ);
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
        <label htmlFor="applicant-type" className="applicant-label">
          Applicant Type *
        </label>
        <div className="types">
          <div className="radio-container">
            <input
              type="radio"
              name="applicantType"
              id="fresher"
              disabled={review}
              className="input-element radio-element"
              style={review ? { border: "none" } : {}}
            />
            <label htmlFor="fresher" className="radio-group">
              Fresher
            </label>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              name="applicantType"
              id="exp"
              defaultChecked
              disabled={review}
              className="input-element radio-element"
              style={review ? { border: "none" } : {}}
            />
            <label htmlFor="exp" className="radio-group">
              Experience
            </label>
          </div>
        </div>
      </div>

      {showQualificationDialog && (
        <div className="education-card ">
          <div className="input-group">
            <label htmlFor="experience" className="input-label">
              Years of Experience *
            </label>
            <input
              className="number-input input-element"
              type="number"
              placeholder="5"
              value=""
              name="experience"
              id="experience"
              disabled={review}
              style={review ? { border: "none" } : {}}
            />
          </div>

          <div className="input-group">
            <label for="curr_ctc" className="input-label">
              Current CTC * (In Rupees)
            </label>
            <input
              className="number-input input-element"
              type="number"
              placeholder="500000"
              value=""
              name="curr_ctc"
              id="curr_ctc"
              disabled={review}
              style={review ? { border: "none" } : {}}
            />
          </div>

          <div className="input-group">
            <label for="expected_ctc" className="input-label">
              Expected CTC * (In Rupees)
            </label>
            <input
              className="number-input input-element"
              type="number"
              placeholder="6,50,000"
              value=""
              name="expected_ctc"
              id="expected_ctc"
              disabled={review}
              style={review ? { border: "none" } : {}}
            />
          </div>

          <div className="input-group">
            <label for="tech" className="input-label">
              Select All The Technologies You Expertise In *
            </label>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="tech"
                id="role1"
                checked
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
              />
              <label for="role1" className="input-label checkbox-text">
                Javascript
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="tech"
                id="role2"
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
              />
              <label for="role2" className="input-label checkbox-text">
                Angular JS
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="tech"
                id="role3"
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
              />
              <label for="role3" className="input-label checkbox-text">
                React
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="tech"
                id="role4"
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
              />
              <label for="role4" className="input-label checkbox-text">
                Node JS
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="tech"
                id="role5"
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
              />
              <label for="role5" className="input-label checkbox-text">
                Others
              </label>
            </div>
          </div>

          <div className="input-group">
            <label for="other_tech" className="input-label">
              If others, please mention
            </label>
            <input
              style={{ width: "50%", ...(review ? { border: "none" } : {}) }}
              type="text"
              placeholder=""
              value=""
              name="other_tech"
              id="other_tech"
              className="input-element"
              disabled={review}
            />
          </div>

          <div className="input-group">
            <label for="tech" className="input-label">
              Select All The Technologies You Are Familiar In *
            </label>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="tech"
                id="srole1"
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
              />

              <label for="srole1" className="input-label checkbox-text">
                Javascript
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="tech"
                id="srole2"
                checked
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
              />
              <label for="srole2" className="input-label checkbox-text">
                Angular JS
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="tech"
                id="srole3"
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
              />
              <label for="srole3" className="input-label checkbox-text">
                React
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="tech"
                id="srole4"
                checked
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
              />
              <label for="srole4" className="input-label checkbox-text">
                Node JS
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="tech"
                id="srole5"
                disabled={review}
                className="input-element checkbox-group"
                style={review ? { border: "none" } : {}}
              />
              <label for="srole5" className="input-label checkbox-text">
                Others
              </label>
            </div>
          </div>

          <div className="input-group">
            <label for="other_tech" className="input-label">
              If others, please mention
            </label>
            <input
              style={{ width: "50%", ...(review ? { border: "none" } : {}) }}
              type="text"
              placeholder=""
              value=""
              name="other_tech"
              id="other_tech"
              className="input-element"
              disabled={review}
            />
          </div>

          <div
            className="applicant-type"
            style={{ padding: 0, margin: 0, marginTop: "40px" }}
          >
            <label for="noticeperiod" className="applicant-label">
              Are you currently on notice period? *
            </label>
            <div className="types">
              <div className="radio-container">
                <input
                  type="radio"
                  name="noticeperiod"
                  id="noticeperiod-yes"
                  defaultChecked={false}
                  disabled={review}
                  className="input-element radio-element"
                  style={review ? { border: "none" } : {}}
                />
                <label htmlFor="noticeperiod-yes" className="radio-group">
                  Yes
                </label>
              </div>
              <div className="radio-container">
                <input
                  type="radio"
                  name="noticeperiod"
                  id="noticeperiod-no"
                  defaultChecked
                  disabled={review}
                  className="input-element radio-element"
                  style={review ? { border: "none" } : {}}
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
                <label for="qualification" className="input-label">
                  If Yes, when will your notice period end? *
                </label>
                <input
                  style={{
                    width: "98%",
                    ...(review ? { border: "none" } : {}),
                  }}
                  type="date"
                  placeholder="dd-mm-yyyy"
                  value=""
                  name="notice_period_end_date"
                  id="notice_period_end_date"
                  disabled={review}
                  className="input-element"
                />
              </div>
            </div>
            <div className="stream">
              <div className="input-group">
                <label for="notice_time" className="input-label">
                  How long is your notice period? * (Mention in months)
                </label>
                <select
                  disabled={review}
                  style={review ? { border: "none" } : {}}
                  name="notice_time"
                  id="notice_time"
                  className="qualification-select select-input"
                >
                  <option value="" className="vale">
                    2 months
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div
            className="applicant-type"
            style={{ padding: 0, margin: 0, marginTop: "40px" }}
          >
            <label for="noticeperiod" className="applicant-label">
              Have You Appeared For Any Test By Zeus in the past 12 months? *
            </label>

            <div className="types">
              <div className="radio-container">
                <input
                  type="radio"
                  name="preAttempt"
                  id="pre-attempt-yes"
                  disabled={review}
                  className="input-element radio-element"
                  style={review ? { border: "none" } : {}}
                />
                <label htmlFor="pre-attempt-yes" className="radio-group">
                  Yes
                </label>
              </div>
              <div className="radio-container">
                <input
                  type="radio"
                  name="preAttempt"
                  id="pre-attempt-no"
                  checked
                  disabled={review}
                  className="input-element radio-element"
                  style={review ? { border: "none" } : {}}
                />
                <label htmlFor="pre-attempt-no" className="radio-group">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="input-group">
            <label for="other_tech" className="input-label">
              If Yes, which role did you apply for?
            </label>
            <input
              style={{ width: "50%", ...(review ? { border: "none" } : {}) }}
              type="text"
              placeholder=""
              value=""
              name="other_tech"
              id="other_tech"
              disabled={review}
              className="input-element"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfessionalQualification;
