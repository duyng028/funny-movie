import { LOGIN_REGISTER_REQUEST_SUCCESS, LOGIN_REGISTER_REQUEST_FAILED } from '../actions/types';

const initState = {
  email: '',
  isLoggedIn: false
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REGISTER_REQUEST_SUCCESS:
      return { ...state, email: payload, isLoggedIn: true };

    case LOGIN_REGISTER_REQUEST_FAILED:
      return { ...state, email: '', isLoggedIn: false };

    default:
      return state;
  }
};
