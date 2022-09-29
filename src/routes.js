import React, { useEffect } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import { useRoutes, Outlet, useNavigate } from "react-router-dom";
import { useMoralis } from "react-moralis";

import Login from "./pages/login/Login";
import Market from "./pages/market/Market";
import Checkout from "./pages/checkout/Checkout";
import Admin from "./pages/admin/Admin";

const Routes = () => {
  const { isAuthenticated } = useMoralis();

  return useRoutes([
    {
      path: "/",
      element: isAuthenticated ? <DefaultLayout /> : <Outlet />,
      children: [
        { path: "login", element: <Login /> },
        { path: "market", element: <Market /> },
        { path: "checkout", element: <Checkout /> },
        { path: "admin", element: <Admin /> },
      ],
    },
  ]);
};

export default Routes;
