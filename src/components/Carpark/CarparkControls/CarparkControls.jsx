import React from "react";

import classes from "./CarparkControls.module.scss";

const carparkControls = props => {
  return (
    <div className={classes.CarparkControls + " bg-secondary-light"}>
      <button onClick={props.move}>Move</button>
    </div>
  );
};

export default carparkControls;
