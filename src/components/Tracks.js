import React from "react";
import {removeTrack} from "../actions/tracks";
import {connect} from "react-redux";

function Tracks({title, status, id, track, props}) {
  // const handleClick = () => {
  //   // debugger;
  //   removeTrack(track);
  // };
  return (
    <li className="status" key={id}>
      <h2> {title} </h2>
      <br />
      <button id={track} onClick={() => props.remove(props.track)}>
        X
      </button>
      Status: {status}
    </li>
  );
}

export default connect(null, {removeTrack})(Tracks);
