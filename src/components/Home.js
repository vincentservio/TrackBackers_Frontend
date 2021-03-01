import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to TrackBackers</h1>
        <h3>Begin by clicking below to add track:</h3>

        <Link to="/tracks/new">
          <img
            src="https://media1.tenor.com/images/8755c322542a57dadf787cbec2d92b50/tenor.gif?itemid=16348608"
            className="home-icon"
            alt="logo"
          />{" "}
        </Link>
      </div>
    );
  }
}
