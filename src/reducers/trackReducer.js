export default (state = {tracks: [], loading: false}, action) => {
  switch (action.type) {
    case "LOADING_TRACKS":
      return {
        ...state,
        loading: true,
      };

    case "TRACKS_LOADED":
      return {
        ...state,
        tracks: action.payload,
        loading: false,
      };

    case "ADDING_TRACK":
      return {
        ...state,
        loading: true,
      };
    case "TRACK_ADDED":
      return {
        ...state,
        tracks: [...state.tracks, action.payload],
        loading: false,
      };

    case "REMOVE_TRACK":
      return {
        ...state.tracks.filter((track) => track !== action.payload),
      };
    default:
      return state;
  }
};
