import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_REGISTER_REQUEST } from '../actions/types';
import { doLoginRegisterRequestSuccess, doLoginRegisterRequestFailed } from '../actions';
import { loginRegisterApi } from '../services';

function* loginRegisterSaga(action) {
  try {
    const { payload } = action;
    const response = yield call(loginRegisterApi, payload);
    if (!response.code) {
      yield put(doLoginRegisterRequestSuccess(payload.email));
    } else {
      yield put(doLoginRegisterRequestFailed());
    }
  } catch (error) {
    console.log('Has an error with "loginRegisterSaga".', error);
  }
}

function* watchAuthSagas() {
  yield takeLatest(LOGIN_REGISTER_REQUEST, loginRegisterSaga);
}

export default [watchAuthSagas];
