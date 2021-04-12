import React, { Component } from "react";
import * as Validate from "./../../js/validate-input";
import * as Notify from "./../../constant/Notify";

export default class InputEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notify: "",
    };
  }

  handleOnEnter = (event) => {
    const { value } = event.target;
    let flag = true;

    if (!Validate.isEmail(value)) {
      flag = false;
      this.setState({ notify: Notify.IS_NOT_EMAIL });
    }

    if (Validate.isEmpty(value)) {
      flag = false;
      this.setState({ notify: Notify.IS_EMPTY });
    }

    if (flag) {
      this.props.onGetEmail(value);
      this.setState({ notify: "" });
      
    }
  };

  render() {
    const { notify } = this.state;

    return (
      <div className="input-group">
        <input
          type="text"
          placeholder="Please Enter Your Email"
          onBlur={this.handleOnEnter}
        />
        {notify !== "" ? <p className="notify warning">{notify}</p> : null}
      </div>
    );
  }
}
