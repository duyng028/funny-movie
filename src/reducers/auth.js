import { LOGIN_REGISTER_REQUEST_SUCCESS, LOGIN_REGISTER_REQUEST_FAILED, VOTE_MOVIE_REQUEST_SUCCESS, LOGOUT } from '../actions/types';

const initState = {
  email: '',
  isLoggedIn: false,
  votedMovies: {}
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REGISTER_REQUEST_SUCCESS:
      return { ...state, email: payload, isLoggedIn: true };

    case LOGOUT:
      return { ...state, email: '', isLoggedIn: false, votedMovies: {} };

    case LOGIN_REGISTER_REQUEST_FAILED:
      return { ...state, email: '', isLoggedIn: false };

    case VOTE_MOVIE_REQUEST_SUCCESS:
      return { ...state, votedMovies: { ...state.votedMovies, [payload.videoID]: payload.votingValue } };

    default:
      return state;
  }
};
