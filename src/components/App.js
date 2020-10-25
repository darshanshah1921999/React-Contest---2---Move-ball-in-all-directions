import React, { Component, useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const updatePosition = (x, y) => {
    console.log(x);
    setX(x);
    setY(y);
    const updatedPosition = {
      left: x + "px",
      top: y + "px"
    };
    // console.log(updatedPosition);
    setBallPosition(updatedPosition);
  };

  const clickHandler = (event) => {
    if (event.keyCode === 39) {
      updatePosition(x + 5, y);
    } else if (event.keyCode === 40) {
      updatePosition(x, y + 5);
    } else if (event.keyCode === 38) {
      updatePosition(x, y - 5);
    } else if (event.keyCode === 37) {
      updatePosition(x - 5, y);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", clickHandler);

    return () => {
      document.removeEventListener("keydown", clickHandler);
    };
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", clickHandler);
    return () => {
      document.removeEventListener("keydown", clickHandler);
    };
  }, [x]);

  React.useEffect(() => {
    document.addEventListener("keydown", clickHandler);
    return () => {
      document.removeEventListener("keydown", clickHandler);
    };
  }, [y]);
  const buttonClickHandler = () => {
    setRenderBall(true);
  };
  const reset = () => {
    setRenderBall(false);
    updatePosition(0, 0);
  };
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button className="start" onClick={() => buttonClickHandler()}>
          Click For One Ball
        </button>
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
