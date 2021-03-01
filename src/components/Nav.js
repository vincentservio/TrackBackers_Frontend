import React, {Component} from "react";
import {Link} from "react-router-dom";

import "../index.css";

export default class Nav extends Component {
  render() {
    return (
      <div>
        {/* <img
           className="App-logo"
           alt="logo"
         /> */}
        <center>
          <Link to="/">Home</Link>
          <Link to="/tracks/new">Addtrack </Link>

          <Link to="/tracks">Status </Link>
          <Link to="/instrumentals">Instrumentals </Link>
        </center>
      </div>
    );
  }
}
