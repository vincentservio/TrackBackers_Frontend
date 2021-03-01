export const getTracks = () => {
  return (dispatch) => {
    dispatch({type: "LOADING_TRACKS"});
    return fetch("http://localhost:3001/tracks")
      .then((res) => res.json())
      .then((tracks) => dispatch({type: "TRACKS_LOADED", payload: tracks}));
  };
};
export const addTrack = (track) => {
  return (dispatch) => {
    dispatch({type: "ADDING_TRACK"});
    fetch("http://localhost:3001/tracks", {
      method: "POST",
      body: JSON.stringify(track),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((track) => dispatch({type: "TRACK_ADDED", payload: track}));
  };
};

export const removeTrack = (track) => {
  return (dispatch) => {
    dispatch({type: "REMOVE_TRACK"});
    debugger;
    fetch("http://localhost:3001/tracks", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    debugger;
    // .then((response) => response.json());
  };
};
