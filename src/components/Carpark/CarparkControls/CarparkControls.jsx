import React from "react";

import CarparkControl from "./CarparkControl/CarparkControl";

import classes from "./CarparkControls.module.scss";

const carparkControls = props => {
  const { busPlaced } = props;
  if (!busPlaced) {
    return (
      <div className={classes.CarparkControls + " bg-secondary-dark"}>
        <div className={classes.Buttons}>
          <CarparkControl clicked={() => props.openModal("place")}>
            Place
          </CarparkControl>
          <CarparkControl clicked={() => props.openModal("insert")}>
            Insert Instructions
          </CarparkControl>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.CarparkControls + " bg-secondary-dark"}>
      <div className={classes.Buttons}>
        <CarparkControl clicked={props.openPlace}>Place</CarparkControl>
        <CarparkControl clicked={() => props.openModal("insert")}>
          Insert Instructions
        </CarparkControl>
        <CarparkControl clicked={props.report}>Report</CarparkControl>
      </div>
      <div className={classes.Buttons}>
        <CarparkControl clicked={props.rotateLeft} icon="hand-point-left">
          Left
        </CarparkControl>
        <CarparkControl clicked={props.move}>Move</CarparkControl>
        <CarparkControl clicked={props.rotateRight} icon="hand-point-right">
          Right
        </CarparkControl>
      </div>
    </div>
  );
};

export default carparkControls;
