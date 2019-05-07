import React from "react";

import classes from "./CarparkControls.module.scss";

const carparkControls = props => {
  return (
    <div className={classes.CarparkControls + " bg-secondary-light"}>
      <button onClick={props.rotateLeft}>Left</button>
      <button onClick={props.move}>Move</button>
      <button onClick={props.rotateRight}>Right</button>
    </div>
  );
};

export default carparkControls;
