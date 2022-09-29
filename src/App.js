import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Routes from "./routes";
import { useMoralis } from "react-moralis";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  

  return (
    <div>
      <Routes />
      <ToastContainer />
    </div>
  );
};

export default App;
