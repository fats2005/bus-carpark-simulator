import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./CarparkSlot.module.scss";

const carparkSlot = props => {
  if (!props.faced) return <div className={classes.CarparkSlot} />;

  let icon = null;

  if (props.faced === "NORTH") icon = "arrow-circle-up";
  if (props.faced === "SOUTH") icon = "arrow-circle-down";
  if (props.faced === "EAST") icon = "arrow-circle-right";
  if (props.faced === "WEST") icon = "arrow-circle-left";

  return (
    <div className={classes.CarparkSlot}>
      <FontAwesomeIcon icon={icon} size="3x" />
    </div>
  );
};

export default carparkSlot;
