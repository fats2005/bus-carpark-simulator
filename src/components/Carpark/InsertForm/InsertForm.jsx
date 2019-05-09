import React, { Component } from "react";

import classes from "./InsertForm.module.scss";

class InsertForm extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.inserted(this.state.text);
  };

  render() {
    const { text } = this.state;
    return (
      <form className={classes.InsertForm} onSubmit={this.handleSubmit}>
        <label htmlFor="text">
          Insert the instructions:
          <textarea
            value={text}
            id="text"
            name="text"
            onChange={this.handleChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InsertForm;
