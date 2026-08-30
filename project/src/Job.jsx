import React from "react";

const Job = ({ title, location }) => {
  return (
    <div>
      <p>location is {location}</p>
      <p>title is {title}</p>
    </div>
  );
};

export default Job;
