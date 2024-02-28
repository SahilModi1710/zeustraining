const createVariable = (personalInfo, qualification) => {
  const jobRoleMap = {
    "Instructional Designer": 1,
    "Software Engineer": 2,
    "Software Quality Engineer": 3,
  };

  const techMap = {
    Java: 1,
    Python: 2,
    Javascript: 3,
    React: 4,
    SQL: 5,
  };

  const jobRolesIds = personalInfo.jobRoles.map((role) => jobRoleMap[role]);

  const experitseTechnologiesIds = qualification.expertiseTechnology.map(
    (tech) => techMap[tech]
  );

  const familiarTechnologiesIds = qualification.familiarTechnology.map(
    (tech) => techMap[tech]
  );

  let experiencedQualification = {};
  if (!qualification.isFresher) {
    experiencedQualification = {
      experience_year: qualification.isFresher
        ? 0
        : parseInt(qualification.experienceYear || "0"),
      current_ctc: qualification.isFresher
        ? "0"
        : qualification.currentCtc || "0",
      expected_ctc: qualification.isFresher
        ? "0"
        : qualification.expectedCtc || "0",
      notice_period: qualification.noticePeriod || false,
      notice_period_end: qualification.noticeEndDate || null,
      notice_period_duration: parseInt(qualification.noticeDuration || "0"),
      expertiseTechnologies: qualification.isFresher
        ? []
        : experitseTechnologiesIds,
    };
  }

  const input = {
    first_name: personalInfo.firstName,
    last_name: personalInfo.lastName,
    email: personalInfo.email,
    password: "pass123",
    phone_no: personalInfo.countryCode + personalInfo.phoneNumber,
    resume: personalInfo.resumeFile?.name || "",
    portfolio_url: personalInfo.portfolioUrl || "",
    profile_pic: personalInfo.profilePicFile?.name || "",
    jobRoles: jobRolesIds,
    educationalQualifications: {
      aggregate_percentage: parseFloat(qualification.percentage),
      passing_year: parseInt(qualification.year),
      degree: qualification.qualification,
      stream: qualification.stream,
      college:
        college === "Others"
          ? qualification.otherCollege
          : qualification.college,
      college_city: qualification.location,
    },
    professionalQualifications: {
      applicant_type: qualification.isFresher ? "fresher" : "experience",
      applied_test: qualification.appliedTest,
      applied_test_role: qualification.appliedRole || "",
      familiarTechnologies: familiarTechnologiesIds,

      ...(!qualification.isFresher && {
        experienced_qualification: experiencedQualification,
      }),
    },
  };

  console.log(input);

  return input;
};

export default createVariable;
