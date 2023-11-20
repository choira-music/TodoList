import React from 'react';
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";

function SideBar() {
  return (
    <div className="sidebar">
    <div className="icons video  ">
      <BsFillCameraVideoFill />
    </div>
    <div className=" ">
      <FaBars />
    </div>
  </div>
  )
}

export default SideBar
