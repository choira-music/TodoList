import React from 'react'
import { FaCrown } from "react-icons/fa6";
function Video() {
  return (
    <>
    <div className="video-call">
          <div className="video-section">
            <div className="host">
              <div>(host) <FaCrown />
            </div>
            
              <div className='userName'>
                  <div>

                  <h3>user</h3>
                  </div>
                </div>
                  
            </div>
            <div>
            <div className='userName'>
                <div>
                  <h3>user</h3>
                </div>
                  </div>
            </div>
          </div>

          <div className="video-section">
            <div>
            <div className='userName'>
                <div>
                  <h3>user</h3>
                </div>
                  </div>
            </div>
            <div>
            <div className='userName'>
                <div>
                  <h3>user</h3>
                </div>
                  </div>
            </div>
          </div>
        {/* video call section ends here ---------- */}
      </div>
    </>
  )
}

export default Video
