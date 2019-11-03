import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
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
