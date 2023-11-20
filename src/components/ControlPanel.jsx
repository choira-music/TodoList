import React from "react";
import "../styles/main.css";


import CPFunction1 from "./CPFunction1";
import CPFunction2 from "./CPFunction2";

function ControlPanel() {
  return (
    <div className="control">
      <CPFunction1/>
      
      <CPFunction2/>
     
    
    </div>
  );
}

export default ControlPanel;
