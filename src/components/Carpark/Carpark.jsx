import React, { Component } from "react";

import CarparkSlot from "./CarparkSlot/CarparkSlot";

import classes from "./Carpark.module.scss";

class Carpark extends Component {
  state = {
    dimensions: {
      x: 5,
      y: 5
    },
    board: []
  };

  componentDidMount = () => {
    let { dimensions } = this.state;
    let column = Array(dimensions.x).fill(false);
    let board = [];
    for (let i = 0; i < dimensions.y; i++) {
      board.push([...column]);
    }
    this.setState({ board });
  };

  render() {
    let { board } = this.state;
    console.log(board);
    let renderBoard = board.map((y, yKey) => {
      return (
        <div className={classes.Column} key={yKey}>
          {y.map((x, xKey) => {
            return <CarparkSlot key={yKey + xKey} used={x} />;
          })}
        </div>
      );
    });

    return (
      <div className={classes.Carpark}>
        <div className={classes.Board}>{renderBoard}</div>
      </div>
    );
  }
}

export default Carpark;
