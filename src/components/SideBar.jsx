import React, { useState } from 'react';
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";


function SideBar({ onSelectedValueChange }) {
  const [selectedValue, setSelectedValue] = useState("1");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onSelectedValueChange(value);
  };

  return (
    <div className="sidebar">
      <div className="icons video">
        <BsFillCameraVideoFill />
      </div>
      <div className=" ">
        <FaBars />
      </div>
      <div>
      <select name="" id="" value={selectedValue} onChange={handleSelectChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    
      
    </div>
  );
}

export default SideBar;
