import React, { useState } from "react";
import "../styles/main.css";
import choira from "../images/choira.svg";
import { BsFillCameraVideoFill } from "react-icons/bs";


import ControlPanel from "./ControlPanel";
import Video from "./Video";
import SideBar from "./SideBar";
import CPFunction1 from "./CPFunction1";
import Play from "./Play";
import CPFunction2 from "./CPFunction2";
import MobFooter from "./MobFooter";
import Host from "./Host";

function Screen() {
  const [selectedValue, setSelectedValue] = useState("1");

  const handleSelectedValueChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <>
      <div className="screen-main">
        {/* navbar section start here ---------- */}
        <div className="logo">
          <div className="CPFunction1">
        
            <CPFunction1  />
          </div>
          <img src={choira} />
          <div className="title">
            <h1 className="heading">Friday night jam</h1>
          </div>
          <div className="invite">
            <div>
              <strong>+</strong>
            </div>
            <span>invite</span>
          </div>
        </div>
        {/* navbar section end --------------- */}

        {/* main section start here ----------- */}
        <div className="mobile-sidebar">

        <SideBar onSelectedValueChange={handleSelectedValueChange} />
        </div>
        <div className="main-video">
          {/* sidebar section start here------- */}
          <SideBar onSelectedValueChange={handleSelectedValueChange} />
          {/* sidebar section ends here ------------ */}

          {/* video call section start here -------- */}
          {/* <Video /> */}
          <Host screens={parseInt(selectedValue)} />
          {/* main section ends here ------------------ */}
        </div>
        <div className="ControlPanel">
        <ControlPanel />
        </div>
        <div className="MobFooter">

        <MobFooter/>
        </div>

       
      </div>
    </>
  );
}

export default Screen;
