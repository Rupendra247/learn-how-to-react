import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SunwayLink = () => {
  let navigate = useNavigate();
  return (
    <div>
      <NavLink style={{ margin: "10px" }} to="/product/create">
        Create Product
      </NavLink>
      <NavLink style={{ margin: "10px" }} to="/product">
        Product
      </NavLink>
      <NavLink style={{ margin: "10px" }} to="/user/create">
        Create User
      </NavLink>
      <NavLink style={{ margin: "10px" }} to="/user">
         User
      </NavLink>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        login
      </button>
    </div>
  );
};

export default SunwayLink;
