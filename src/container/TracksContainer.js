import React, {Component} from "react";
import {connect} from "react-redux";
import {getTracks} from "../actions/tracks";
import Tracks from "../components/Tracks";
import Loading from "../components/Loading";
class TracksContainer extends Component {
  componentDidMount() {
    this.props.getTracks();
  }
  render() {
    // const handleDelete = () => {};

    const tracks = this.props.tracks.map((track, i) => (
      <Tracks
        key={i}
        title={track.title}
        status={track.status}
        id={track.id}
        track={track}
        delete={this.props.delete}
      />
    ));
    return (
      <div>
        <h1>TrackList</h1>
        <ul>{this.props.loading ? <Loading /> : tracks}</ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tracks: state.trackReducer.tracks,
    loading: state.trackReducer.loading,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     remove: (track) => dispatch({type: "REMOVE_TRACK", payload: track}),
//   };
// };
export default connect(mapStateToProps, {getTracks})(TracksContainer);
