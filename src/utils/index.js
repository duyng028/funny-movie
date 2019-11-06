import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';

export const testStore = initialState => {
  const saga = createSagaMiddleWare();

  const logger = createLogger();
  const createStoreWithMiddleware = applyMiddleware(saga, logger)(createStore);
  const store = createStoreWithMiddleware(reducers, initialState);

  saga.run(rootSaga);

  return store;
};

export const getMovieID = url => {
  const reg = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/;
  const matches = url && url.match(reg);

  return (matches && matches[5]) || undefined;
};
