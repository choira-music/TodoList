import React, { useState } from 'react';

function Play() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <div className="play">
        <div className={`${isClicked ? 'dark-red' : 'normal-red'}`} onClick={handleClick}></div>
      </div>
    </div>
  );
}

export default Play;
