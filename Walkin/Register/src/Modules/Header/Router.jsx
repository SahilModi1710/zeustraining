import { createBrowserRouter } from "react-router-dom";
import PersonalInformation from "../RegistrationModule/PersonalInformation/PersonalInformation";
import Qualifications from "../RegistrationModule/Qualifications/Qualifications";
import Review from "../RegistrationModule/Review/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PersonalInformation />,
  },
  {
    path: "/qualification",
    element: <Qualifications />,
  },
  {
    path: "/review",
    element: <Review />,
  },
]);

export default router;
