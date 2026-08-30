import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./global.css";
import User from "./User.jsx";
import Newproduct from "./Newproduct.jsx";
import Job from "./Job.jsx";
import LearnTernaryOperater from "./LearnTernaryOperater.jsx";
import UserState from "./userstate/UserState.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* <User /> */}
      {/* <Newproduct /> */}
      {/* <Job title="developer" location="kathmandu"></Job> */}
      {/* <LearnTernaryOperater /> */}
      {/* <UserState /> */}
    </BrowserRouter>
  </StrictMode>
);
