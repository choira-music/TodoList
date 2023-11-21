import React, { useState } from "react";
import { VscPiano } from "react-icons/vsc";
import Play from "./Play";

function CPFunction1() {
  const [val, setVal] = useState(120);
  const [bar, setBar] = useState("0004");
  return (
    <>
      <div className="f1 unselectable">
        <div className="function">
          <div>
            <h3 className="piano">
              <VscPiano />
            </h3>
          </div>
          <div>
            <h3>
            <span>
  <strong className="pointer" onClick={() =>
    setBar((bar) => {
      const newBar = parseInt(bar, 10) - 1;
      return newBar >= 0 ? `0000${newBar}`.slice(-4) : '000';
    })
  }>
    -
  </strong>
  <input
    type="number"
    className="div4 pointer"
    value={bar}
    onChange={(e) => setBar(parseInt(e.target.value, 10))}
  />
  <strong className="pointer" onClick={() =>
    setBar((bar) => {
      const newBar = parseInt(bar, 10) + 1;
      return `0000${newBar}`.slice(-4);
    })
  }>
    +
  </strong>
</span>


            </h3>
            <h6>Bar</h6>
          </div>
          <div>
            <h3>
              <span>
                <strong className="pointer" onClick={() => setVal(val - 1)}>
                  -
                </strong>
                <input
                  type="number"
                  className="div4 pointer"
                  value={val}
                  onChange={(e) => setVal(parseInt(e.target.value, 10))}
                />
                <strong className="pointer" onClick={() => setVal(val + 1)}>
                  +
                </strong>
              </span>
            </h3>

            <h6>Beat</h6>
          </div>
          <div>
            <h3>
              <span>
                <strong className="pointer" onClick={() => setVal(val - 1)}>
                  -
                </strong>
                <input
                  type="number"
                  className="div4 pointer"
                  value={val}
                  onChange={(e) => setVal(parseInt(e.target.value, 10))}
                />
                <strong className="pointer" onClick={() => setVal(val + 1)}>
                  +
                </strong>
              </span>
            </h3>
            <h6>Tempo</h6>
          </div>

          <div className="div5">
            <h3>
              <input type="number" placeholder="4" />/
              <input type="number" placeholder="4" />
            </h3>
            <h6>camj</h6>
          </div>
        </div>
        <Play />
      </div>
    </>
  );
}

export default CPFunction1;
