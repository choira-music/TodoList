import React from "react";
import "../styles/main.css";
import choira from "../images/choira.svg";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";
import ControlPanel from "./ControlPanel";
function Screen() {
  return (
    <>
    <div className="screen-main">
      {/* navbar section start here ---------- */}
      <div className="logo">
        <img src={choira} />

        <div className="title">
          <h1>friday night jam</h1>
        </div>
        <div className="invite">
          <div>
            <strong>+</strong>
          </div>
          invite
        </div>
      </div>

      {/* navbar section end --------------- */}

      {/* main section start here ----------- */}
      <div className="main-video">
        {/* sidebar section start here------- */}
        <div className="sidebar">
          <div className="icons video  ">
            <BsFillCameraVideoFill />
          </div>
          <div className=" ">
            <FaBars />
          </div>
        </div>
        {/* sidebar section ends here ------------ */}

        {/* video call section start here -------- */}
        <div className="video-call">
          <div className="video-section">
            <div className="host">
              <div>(host) <FaCrown /></div>
            </div>
            <div></div>
          </div>

          <div className="video-section">
            <div></div>
            <div></div>
          </div>
        {/* video call section ends here ---------- */}
      </div>
      {/* main section ends here ------------------ */}
    </div>
    <ControlPanel/>
        </div>
    </>
  );
}

export default Screen;
