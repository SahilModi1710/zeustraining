import React from "react";
import { Outlet } from "react-router-dom";
import RegistrationHeader from "../Header/RegistrationHeader";

const Layout = () => {
  return (
    <>
      <RegistrationHeader />
      <Outlet />
    </>
  );
};

export default Layout;
