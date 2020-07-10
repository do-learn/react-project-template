import React from "react";
import logoZhImg from "../assets/headicon.png";
import ToDo from "../ToDo";

const HelloWorld: React.FC = () => {
  return (
    <div className="color-red">
      <ToDo />
      <img src={logoZhImg} alt="" />
      1231345678
    </div>
  );
};

export default HelloWorld;
