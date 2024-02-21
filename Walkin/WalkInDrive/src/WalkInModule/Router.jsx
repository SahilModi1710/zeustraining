import { createBrowserRouter } from "react-router-dom";
import WalkInDrives from "./WalkInDrives";
import Review from "./Review/Review";
import DriveDetails from "./DriveDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WalkInDrives />,
  },
  {
    path: "/drive",
    element: <DriveDetails />,
  },
  {
    path: "/review",
    element: <Review />,
  },
]);

export default router;
