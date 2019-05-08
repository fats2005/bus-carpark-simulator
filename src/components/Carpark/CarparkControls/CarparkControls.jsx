import React from "react";

import CarparkControl from "./CarparkControl/CarparkControl";

import classes from "./CarparkControls.module.scss";

const carparkControls = props => {
  return (
    <div className={classes.CarparkControls + " bg-secondary-light"}>
      <div className={classes.Buttons}>
        <button onClick={props.openPlace}>Place</button>
      </div>
      <div className={classes.Buttons}>
        <CarparkControl
          clicked={props.rotateLeft}
          icon="hand-point-left"
          disabled={!props.busPlaced}
        >
          Left
        </CarparkControl>
        <CarparkControl clicked={props.move} disabled={!props.busPlaced}>
          Move
        </CarparkControl>
        <CarparkControl
          clicked={props.rotateRight}
          icon="hand-point-right"
          disabled={!props.busPlaced}
        >
          Right
        </CarparkControl>
      </div>
    </div>
  );
};

export default carparkControls;
