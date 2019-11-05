import { LOGIN_REGISTER_REQUEST, LOGIN_REGISTER_REQUEST_SUCCESS, LOGIN_REGISTER_REQUEST_FAILED, LOGOUT, VOTE_MOVIE_REQUEST_SUCCESS, VOTE_MOVIE_REQUEST_FAILED } from './types';

export const doLoginRegisterRequest = payload => {
  return {
    type: LOGIN_REGISTER_REQUEST,
    payload
  };
};

export const doLoginRegisterRequestSuccess = email => {
  return {
    type: LOGIN_REGISTER_REQUEST_SUCCESS,
    payload: email
  };
};

export const doLoginRegisterRequestFailed = () => {
  return {
    type: LOGIN_REGISTER_REQUEST_FAILED
  };
};

export const doLogout = () => {
  return {
    type: LOGOUT
  };
};

export const voteMovieSuccess = payload => {
  return { type: VOTE_MOVIE_REQUEST_SUCCESS, payload };
};

export const voteMovieFailed = payload => {
  return { type: VOTE_MOVIE_REQUEST_FAILED, payload };
};
