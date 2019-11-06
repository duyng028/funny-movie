import { LOGIN_REGISTER_REQUEST, LOGIN_REGISTER_REQUEST_SUCCESS, LOGIN_REGISTER_REQUEST_FAILED, LOGOUT } from './types';

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
