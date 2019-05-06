import React from "react";

import busLogo from "../../assets/images/bus-logo.png";
import classes from "./Logo.module.scss";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={busLogo} alt="Bus Logo" />
  </div>
);

export default logo;
