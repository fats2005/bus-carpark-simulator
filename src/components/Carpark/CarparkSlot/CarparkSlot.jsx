import React from "react";

import classes from "./CarparkSlot.module.scss";

const carparkSlot = props => {
  const { used } = props;
  console.log(used);
  return <div className={classes.CarparkSlot}>{used ? "true" : "false"}</div>;
};

export default carparkSlot;
