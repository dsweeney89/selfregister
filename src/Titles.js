import React, { Component } from "react";
import "./App.css";

class Titles extends Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header">Your ICS SKILLS Test Centre</h5>
        <div className="card-body">
          <h6 className="card-title">
            You are about to register for the following centre:
          </h6>
          <p className="card-text">
            BETA-DEMO-CENTRE-2019
            <br />
            87-89 Pembroke Road
            <br />
            Ballsbridge
            <br />
            Dublin 4
          </p>
        </div>
      </div>
    );
  }
}

export default Titles;
