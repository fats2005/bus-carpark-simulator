import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./CarparkControl.module.scss";

const carparkControl = props => {
  const { icon, children, disabled } = props;
  return (
    <button
      className={classes.CarparkControl}
      onClick={props.clicked}
      disabled={disabled}
    >
      {icon && <FontAwesomeIcon icon={icon} size="3x" />}
      <div>{children}</div>
    </button>
  );
};

export default carparkControl;
