import React from "react";

import classes from "./NavigationItems.module.scss";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Info
    </NavigationItem>
  </ul>
);

export default navigationItems;
