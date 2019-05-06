import React, { Component } from "react";

import Carpark from "../../components/Carpark/Carpark";
import CarparkControls from "../../components/Carpark/CarparkControls/CarparkControls";

import classes from "./CarparkSimulator.module.scss";

class CarparkSimulator extends Component {
  render() {
    return (
      <div className={classes.CarparkSimulator}>
        <Carpark />
        <CarparkControls />
      </div>
    );
  }
}

export default CarparkSimulator;
