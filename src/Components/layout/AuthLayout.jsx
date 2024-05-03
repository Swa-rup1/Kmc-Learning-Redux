import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className=" flex justify-center align-middle    ">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
