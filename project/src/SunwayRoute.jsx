import React from "react";
import { Route, Routes } from "react-router-dom";
import ReadAllProduct from "./ReadAllProduct";
import User from "./User";
import Job from "./Job";

const SunwayRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/product" element={<ReadAllProduct />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/job" element={<Job />}></Route>
      </Routes>
    </div>
  );
};

export default SunwayRoute;
