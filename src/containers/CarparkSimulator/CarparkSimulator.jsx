import React, { Component } from "react";

import CarparkBoard from "../../components/Carpark/CarparkBoard/CarparkBoard";
import CarparkControls from "../../components/Carpark/CarparkControls/CarparkControls";

import classes from "./CarparkSimulator.module.scss";

class CarparkSimulator extends Component {
  state = {
    board: {
      rows: 5,
      columns: 5
    },
    bus: {
      x: 2,
      y: 2,
      faced: "NORTH"
    }
  };

  moveHandler = () => {
    const bus = { ...this.state.bus };
    bus.x = bus.x + 1;
    this.setState({ bus });
  };
  render() {
    const { board, bus } = this.state;
    return (
      <div className={classes.CarparkSimulator}>
        <CarparkBoard rows={board.rows} columns={board.columns} bus={bus} />
        <CarparkControls move={this.moveHandler} />
      </div>
    );
  }
}

export default CarparkSimulator;
