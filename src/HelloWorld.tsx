import React from "react";
import logoZhImg from "./assets/headicon.png";
import ToDo from "./ToDo";

const HelloWorld: React.FC = () => {
  const hello = "1213";
  return (
    <div className="color-red">
      <ToDo />
      <img src={logoZhImg} alt="" />
      1231345678
      {hello}
    </div>
  );
};

export default HelloWorld;
