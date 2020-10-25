import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const updatePosition = () => {
    const updatedPosition = {
      left: x + "px",
      top: y + "px"
    };
    // console.log(updatedPosition);
    setBallPosition(updatedPosition);
  };
  const buttonClickHandler = () => {
    setRenderBall(true);
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        const copy = x + 5;
        setX(copy);
        updatePosition();
      } else if (event.keyCode === 40) {
        setY(y - 5);
        updatePosition();
      } else if (event.keyCode === 38) {
        setY(y + 5);
        updatePosition();
      } else if (event.keyCode === 37) {
        setX(x - 5);
        updatePosition();
      }
    });
  };
  const reset = () => {
    setX(0);
    setY(0);
    updatePosition();
  };
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button onClick={() => buttonClickHandler()}>Click For One Ball</button>
      );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
