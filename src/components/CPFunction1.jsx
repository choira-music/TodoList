import React from 'react'
import { VscPiano } from "react-icons/vsc";
import Play from './Play';


function CPFunction1() {
  const display = true;
  return (
   <>
    <div className="f1">
      <div className="function">
        <div>
          <h3><VscPiano /></h3>
        </div>
        <div>
          <h3>0004</h3>
          <h6>Bar</h6>
        </div>
        <div>
          <h3>1</h3>
          <h6>Beat</h6>
        </div>
        <div>
          <h3><span><bold>-</bold>  &nbsp; 120 &nbsp; <bold>+</bold></span></h3>
         <h6>Tempo</h6>
        </div>
        <div>
          <h3>4/4</h3>
          <h6>camj</h6>
        </div>
      </div>
      {display ? <Play /> : null}

    </div>
   </>
  )
}

export default CPFunction1
