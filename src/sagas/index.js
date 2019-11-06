import { call, all } from 'redux-saga/effects';
import auth from './auth';
import movie from './movie';

const sagas = [...auth, ...movie];

export default function* rootSaga() {
  yield all(sagas.map(saga => call(saga)));
}
