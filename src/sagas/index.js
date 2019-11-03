import { call, all } from 'redux-saga/effects';

const sagas = [];

export default function* rootSaga() {
  yield all(sagas.map(saga => call(saga)));
}
