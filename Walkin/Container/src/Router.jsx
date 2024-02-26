import { createBrowserRouter } from "react-router-dom";
// import Header from "NavigationMFE/Header";
// import WalkInDrives from "WalkInDriveMFE/WalkInDrives";
// import Login from "LoginMFE/Login";
// import PersonalInformation from "RegisterMFE/PersonalInformation";
import Registration from "RegisterMFE/Registration";
// import Qualifications from "./Register/Qualifications";
// import Review from "RegisterMFE/Review";
// import WalkInDrives from "WalkInDriveMFE/WalkInDrives";
// import DriveDetails from "WalkInDriveMFE/DriveDetails";
// import ReviewWalkin from "WalkInDriveMFE/Review";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Login />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  {
    path: "/register/*",
    element: <Registration />,
  },
  {
    path: "",
    element: <PersonalInformation />,
  },
  {
    path: "qualification",
    element: <Qualifications />,
  },
  {
    path: "review",
    element: <Review />,
  },
  // {
  //   path: "/walkindrives",

  //   children: [
  //     {
  //       path: "/walkindrives",
  //       element: <WalkInDrives />,
  //     },
  //     {
  //       path: "/walkindrives/singleDrive",
  //       element: <DriveDetails />,
  //     },
  //     {
  //       path: "/walkindrives/review",
  //       element: <ReviewWalkin />,
  //     },
  //   ],
  // },
]);

export default router;
