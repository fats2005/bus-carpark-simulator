import React from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.scss";

const layout = props => {
  const { children } = props;
  return (
    <React.Fragment>
      <Toolbar />
      <main className={classes.Content}>{children}</main>
    </React.Fragment>
  );
};

export default layout;
