import React, { Component } from "react";
import "./App.css";

class EmailPref extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myclick: this.props.myclickpreferred,
    };
  }

  render() {
    const myclickpreferred = this.props.myclickpreferred;
    // console.log(myclickpreferred)
    let emailOption;

    if (myclickpreferred === "" || myclickpreferred === false) {
      emailOption = (
        <div className="form-row">
          <div className="form-group col-md-4 offset-md-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={
                this.props.errormsg.length > 0
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="email"
              name="email"
              required
              onChange={this.props.onChange}
              value={this.props.emailvalue}
            />
            <span className="error">{this.props.errormsg}</span>
          </div>
        </div>
      );
    } else if (myclickpreferred === true) {
      emailOption = (
        <div className="form-row">
          <div className="form-group col-md-4 offset-md-2">
            <label htmlFor="myclickemail">MyClick Email</label>
            <input
              type="email"
              className="form-control"
              id="myclickemail"
              name="myclick"
              onChange={this.props.onChange}
              placeholder="johndoe@myclick.ie"
              value={this.props.myclickvalue}
            />
          </div>
        </div>
      );
    }

    return <div>{emailOption}</div>;
  }
}

export default EmailPref;
