import React from "react";
import { Route, Routes } from "react-router-dom";
import ReadAllProduct from "./ReadAllProduct";
import User from "./User";
import Job from "./Job";
import CreateProduct from "./product/CreateProduct";
import ReadSingleProduct from "./product/ReadSingleProduct";
import UpdateProduct from "./product/UpdateProduct";

const SunwayRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/product/create" element={<CreateProduct></CreateProduct>}></Route>
        <Route path="/product" element={<ReadAllProduct></ReadAllProduct>}></Route>
        <Route path="/product/:id" element={<ReadSingleProduct></ReadSingleProduct>}></Route>
        <Route path="/product/update/:id" element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>
    </div>
  );
};

export default SunwayRoute;
