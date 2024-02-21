import { createBrowserRouter } from "react-router-dom";
import Header from "NavigationMFE/Header";
// import WalkInDrives from "WalkInDriveMFE/WalkInDrives";
import Login from "LoginMFE/Login";
import PersonalInformation from "RegisterMFE/PersonalInformation";
import Qualifications from "RegisterMFE/Qualifications";
import Review from "RegisterMFE/Review";
import WalkInDrives from "WalkInDriveMFE/WalkInDrives";
import DriveDetails from "WalkInDriveMFE/DriveDetails";
import ReviewWalkin from "WalkInDriveMFE/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",

    children: [
      {
        path: "/register",
        element: <PersonalInformation />,
      },
      {
        path: "/register/qualification",
        element: <Qualifications />,
      },
      {
        path: "/register/review",
        element: <Review />,
      },
    ],
  },
  {
    path: "/walkindrives",

    children: [
      {
        path: "/walkindrives",
        element: <WalkInDrives />,
      },
      {
        path: "/walkindrives/singleDrive",
        element: <DriveDetails />,
      },
      {
        path: "/walkindrives/review",
        element: <ReviewWalkin />,
      },
    ],
  },
]);

export default router;
