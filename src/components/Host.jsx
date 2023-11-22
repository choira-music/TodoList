import React from 'react';
import { FaCrown } from 'react-icons/fa6';
import Video from './Video';


function Host( { screens }) {
  const screen = screens;

  return (
    <>
      <div className={`${screen === 4 ? 'display-None' :'video-call'}`}>
        <div className={` ${screen === 1 || screen === 2 || screen === 3 ? 'video-section-host' : 'display-None'}`}>
          <div className="host">
            <div>(host) <FaCrown /></div>
            <div className='userName'>
              <div>
                <h3>user</h3>
              </div>
            </div>
          </div>
        

        <div className={` ${screen === 2 ? 'second-user' : 'display-None'}`}>
          <div className='userName'>
            <div>
              <h3>user</h3>
            </div>
          </div>
        </div>

        <div className={` ${screen === 3 ? ' video-section-3user' : 'display-None'}`}>
          <div className='userName'>
            <div>
              <h3>user</h3>
            </div>
          </div>
          <div className='userName'>
            <div>
              <h3>user</h3>
            </div>
          </div>
        </div>
        </div>
      </div>
      {screen === 4 && <Video />}

    
    </>
  );
}

export default Host;
