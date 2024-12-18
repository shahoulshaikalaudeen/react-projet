import React from "react";
import Firstname from "./Firstname";
import Lastname from "./Lastname";

const Fullname = ({ firstName, lastName }) => {
  return (
    <div>
      <Firstname firstName={firstName} /> <Lastname lastName={lastName} />
    </div>
  );
};

export default Fullname;
