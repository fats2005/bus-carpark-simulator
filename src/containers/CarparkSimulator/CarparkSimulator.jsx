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
      faced: "EAST"
    }
  };

  componentDidMount = () => {
    document.addEventListener("keydown", this.keyDownHandler);
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownHandler);
  }

  moveHandler = () => {
    const { rows, columns } = this.state.board;
    const bus = { ...this.state.bus };
    if (bus.faced === "NORTH" && bus.y < rows - 1) bus.y++;
    if (bus.faced === "SOUTH" && bus.y > 0) bus.y--;
    if (bus.faced === "EAST" && bus.x < columns - 1) bus.x++;
    if (bus.faced === "WEST" && bus.x > 0) bus.x--;
    this.setState({ bus });
  };

  rotateHandler = direction => {
    const bus = { ...this.state.bus };
    const directions = ["NORTH", "EAST", "SOUTH", "WEST"];
    const directionIndex = directions.indexOf(bus.faced);
    let nextDirection = null;
    if (direction === "LEFT") {
      nextDirection =
        directionIndex > 0 ? directionIndex - 1 : directions.length - 1;
    } else {
      nextDirection =
        directionIndex < directions.length - 1 ? directionIndex + 1 : 0;
    }

    bus.faced = directions[nextDirection];

    this.setState({ bus });
  };

  keyDownHandler = event => {
    if (event.keyCode === 38) this.moveHandler();
    if (event.keyCode === 39) this.rotateHandler("RIGHT");
    if (event.keyCode === 37) this.rotateHandler("LEFT");
  };

  render() {
    const { board, bus } = this.state;
    return (
      <div
        className={classes.CarparkSimulator}
        onKeyPress={this.keyPressHandler}
      >
        <CarparkBoard rows={board.rows} columns={board.columns} bus={bus} />
        <CarparkControls
          move={this.moveHandler}
          rotateLeft={() => this.rotateHandler("LEFT")}
          rotateRight={() => this.rotateHandler("RIGHT")}
        />
      </div>
    );
  }
}

export default CarparkSimulator;
