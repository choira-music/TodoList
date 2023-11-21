import React from 'react'
import Play from './Play'
import { FaMicrophone } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { CiMenuKebab } from "react-icons/ci";
function MobFooter() {
  return (
    <>
     <div className="f2">
     
     <div className="mob-end-jam">
       <div><FaMicrophone />
        {/* <br /> &nbsp;
       <CiMenuKebab  className="mob-sub-menu"  /> */}
       </div>
       <div><IoVideocam /> <br /> 
       {/* &nbsp;
       <CiMenuKebab  className="mob-sub-menu" /> */}
       </div>
       <div><HiMiniSpeakerWave /></div>
       <div><CiMenuKebab /></div>
         <div className='mob-play'>

         <Play/>
         </div>
       <div>
         <button className="mob-end-btn">End Jam</button>
       </div>
     </div>
     </div> 
    
    </>
  )
}

export default MobFooter

