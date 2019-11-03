import _request from './_request';
import { API_URL } from '../constants/serverConfig';

export const loginRegisterApi = payload => {
  return _request.POST(`${API_URL}/api/auth`, payload);
};
