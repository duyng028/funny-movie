import { call, all } from 'redux-saga/effects';
import auth from './auth';

const sagas = [...auth];

export default function* rootSaga() {
  yield all(sagas.map(saga => call(saga)));
}
