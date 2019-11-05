import { LOGIN_REGISTER_REQUEST_SUCCESS, LOGIN_REGISTER_REQUEST_FAILED, VOTE_MOVIE_REQUEST_SUCCESS } from '../actions/types';

const initState = {
  email: 'test@vi',
  isLoggedIn: true,
  votedMovies: {}
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REGISTER_REQUEST_SUCCESS:
      return { ...state, email: payload, isLoggedIn: true };

    case LOGIN_REGISTER_REQUEST_FAILED:
      return { ...state, email: '', isLoggedIn: false };

    case VOTE_MOVIE_REQUEST_SUCCESS:
      return { ...state, votedMovies: { ...state.votedMovies, [payload.videoID]: payload.votingValue } };

    default:
      return state;
  }
};
