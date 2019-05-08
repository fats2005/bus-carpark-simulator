import React, { Component } from "react";

import classes from "./PlaceForm.module.scss";

class PlaceForm extends Component {
  state = {
    bus: {
      x: 0,
      y: 0,
      faced: "NORTH",
      placed: true
    }
  };

  handleChange = event => {
    const { id, value } = event.target;
    const bus = { ...this.state.bus };
    bus[id] = id === "faced" ? id : parseInt(value);
    this.setState({ bus });
  };

  handleSubmit = event => {
    const bus = { ...this.state.bus };
    this.props.placed(bus);
    event.preventDefault();
  };

  render() {
    const { x, y, faced } = this.state.bus;
    return (
      <form className={classes.PlaceForm} onSubmit={this.handleSubmit}>
        <label htmlFor="x">
          Pick a position for X:
          <select value={x} id="x" name="x" onChange={this.handleChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <label htmlFor="y">
          Pick a position for Y:
          <select value={y} id="y" name="y" onChange={this.handleChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <label htmlFor="faced">
          Pick a direction for the bus:
          <select
            value={faced}
            id="faced"
            name="faced"
            onChange={this.handleChange}
          >
            <option value="NORTH">NORTH</option>
            <option value="SOUTH">SOUTH</option>
            <option value="WEST">WEST</option>
            <option value="EAST">EAST</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PlaceForm;
