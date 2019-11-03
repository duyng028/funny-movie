import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleWare from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';

export const testStore = () => {
  const saga = createSagaMiddleWare();
  let middleWares;

  const logger = createLogger();
  middleWares = applyMiddleware(saga, logger);

  const store = createStore(reducers, composeWithDevTools(middleWares));

  saga.run(rootSaga);

  return store;
};
