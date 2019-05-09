import React, { Component } from "react";

import CarparkBoard from "../../components/Carpark/CarparkBoard/CarparkBoard";
import CarparkControls from "../../components/Carpark/CarparkControls/CarparkControls";
import PlaceForm from "../../components/Carpark/PlaceForm/PlaceForm";
import Modal from "../../components/UI/Modal/Modal";

import classes from "./CarparkSimulator.module.scss";

class CarparkSimulator extends Component {
  state = {
    modal: {
      report: false,
      place: false
    },
    board: {
      rows: 5,
      columns: 5
    },
    bus: {
      x: null,
      y: null,
      faced: null,
      placed: false
    },
    report: ""
  };

  componentDidMount = () => {
    document.addEventListener("keydown", this.keyDownHandler);
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownHandler);
  }

  openModalHandler = key => {
    const modal = { ...this.state.modal };
    modal[key] = true;
    this.setState({ modal });
  };

  closeModalHandler = key => {
    const modal = { ...this.state.modal };
    modal[key] = false;
    this.setState({ modal });
  };

  placeBus = bus => {
    this.setState({ bus });
    this.closeModalHandler("place");
  };

  reportHandler = () => {
    const { bus } = this.state;
    const report = `The bus is located at [X=${bus.x}] [y=${
      bus.y
    }] and looking ${bus.faced}`;
    this.setState({ report });
    this.openModalHandler("report");
  };

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
    if (!this.state.bus.placed) return null;
    if (event.keyCode === 38) this.moveHandler();
    if (event.keyCode === 39) this.rotateHandler("RIGHT");
    if (event.keyCode === 37) this.rotateHandler("LEFT");
  };

  render() {
    const { board, bus, modal, report } = this.state;
    return (
      <div
        className={classes.CarparkSimulator}
        onKeyPress={this.keyPressHandler}
      >
        <Modal
          show={modal.place}
          modalClosed={() => this.closeModalHandler("place")}
        >
          <PlaceForm placed={bus => this.placeBus(bus)} />
        </Modal>
        <Modal
          show={modal.report}
          modalClosed={() => this.closeModalHandler("report")}
        >
          <p>{report}</p>
          <button onClick={() => this.closeModalHandler("report")}>
            Close
          </button>
        </Modal>

        <CarparkBoard rows={board.rows} columns={board.columns} bus={bus} />
        <CarparkControls
          busPlaced={bus.placed}
          openPlace={() => this.openModalHandler("place")}
          move={this.moveHandler}
          report={this.reportHandler}
          rotateLeft={() => this.rotateHandler("LEFT")}
          rotateRight={() => this.rotateHandler("RIGHT")}
        />
      </div>
    );
  }
}

export default CarparkSimulator;
