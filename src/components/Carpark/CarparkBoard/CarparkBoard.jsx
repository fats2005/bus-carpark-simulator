import React, { Component } from "react";

import CarparkSlot from "../CarparkSlot/CarparkSlot";

import classes from "./CarparkBoard.module.scss";

class CarparkBoard extends Component {
  render() {
    let { rows, columns, bus } = this.props;

    let board = [];

    for (let x = 0; x < rows; x++) {
      let children = [];
      for (let y = 0; y < columns; y++) {
        let faced = bus.x === x && bus.y === y ? bus.faced : null;
        children.push(<CarparkSlot key={x + y} faced={faced} />);
      }
      board.push(
        <div className={classes.Column} key={x}>
          {children}
        </div>
      );
    }

    return (
      <div className={classes.Carpark}>
        <div className={classes.Board}>{board}</div>
      </div>
    );
  }
}

export default CarparkBoard;
