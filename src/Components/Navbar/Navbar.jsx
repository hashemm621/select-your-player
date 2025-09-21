import React from "react";
import navImg from "../../assets/logo.png"
import coin from "../../assets/Currency.png"

const Navbar = () => {
  return (
    <div className="navbar max-w-[1200px] mx-auto">
      <div className="flex-1">
        <a className="text-xl">
          <img className="w-[60px] h-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center gap-2">
        <span> 60000000000</span>
        <span>
          <img src={coin} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
