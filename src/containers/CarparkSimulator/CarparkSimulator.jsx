import React, { Component } from "react";

import Carpark from "../../components/Carpark/Carpark";
import CarparkControls from "../../components/Carpark/CarparkControls/CarparkControls";

class CarparkSimulator extends Component {
  render() {
    return (
      <React.Fragment>
        <Carpark />
        <CarparkControls />
      </React.Fragment>
    );
  }
}

export default CarparkSimulator;
