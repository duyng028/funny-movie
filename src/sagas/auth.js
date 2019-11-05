import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_REGISTER_REQUEST, VOTE_MOVIE_REQUEST } from '../actions/types';
import { doLoginRegisterRequestSuccess, doLoginRegisterRequestFailed, voteMovieSuccess, voteMovieFailed } from '../actions';
import { loginRegisterApi, voteMovieApi } from '../services';

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

function* voteMovieSaga(action) {
  try {
    const { payload } = action;
    const response = yield call(voteMovieApi, payload);
    if (!response.code) {
      yield put(voteMovieSuccess(payload.email));
    } else {
      yield put(voteMovieFailed());
    }
  } catch (error) {
    console.log('Has an error with "voteMovieSaga".', error);
  }
}

function* watchAuthSagas() {
  yield takeLatest(LOGIN_REGISTER_REQUEST, loginRegisterSaga);
  yield takeLatest(VOTE_MOVIE_REQUEST, voteMovieSaga);
}

export default [watchAuthSagas];
