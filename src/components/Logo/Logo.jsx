import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Logo.module.scss";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <FontAwesomeIcon icon="bus" size="2x" /> BUS CARPARK SIMULATOR
  </div>
);

export default logo;
