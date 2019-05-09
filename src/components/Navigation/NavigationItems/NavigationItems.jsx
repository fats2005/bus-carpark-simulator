import React, { Component } from "react";

import Modal from "../../UI/Modal/Modal";
import classes from "./NavigationItems.module.scss";

class NavigationItems extends Component {
  state = {
    modal: false
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  openModal = () => {
    this.setState({ modal: true });
  };

  render() {
    return (
      <React.Fragment>
        <Modal show={this.state.modal} modalClosed={this.closeModal}>
          <p>Developed by Alejandro Tunaroza</p>
          <p>
            To start click in Place and choose the coordinates. After that, use
            the buttons MOVE and ROTATE
          </p>
          <p>
            Or click in Insert Instrucciones and input the navigation
            instructions. For Instance
          </p>
          <p>
            PLACE 1,2,EAST<br />
            MOVE<br />
            MOVE<br />
            LEFT<br />
            MOVE<br />
            REPORT
          </p>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
        <ul className={classes.NavigationItems}>
          <li className={classes.NavigationItem}>
            <button
              onClick={this.openModal}
              className={classes.Active + " bg-secondary"}
            >
              Info
            </button>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavigationItems;
