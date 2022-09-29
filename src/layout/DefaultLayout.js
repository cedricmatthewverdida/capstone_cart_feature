import React from "react";
import { Outlet } from "react-router-dom";

import AppHeader from "../components/App/AppHeader";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
