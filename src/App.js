import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';
import configStore from './store';
import { HomePage, ShareMoviePage, NotFoundPage } from './containers';
import createPage from './containers/createPage';

const { store, persistor } = configStore();
const routeConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  { path: '/share', exact: true, component: ShareMoviePage, requiredAuth: true },
  { path: '/404', exact: true, component: NotFoundPage }
];

const _generateRoutes = () => {
  const routes = routeConfig.map((route, index) => {
    const { path, exact, component } = route;
    const ComponentWithLayout = createPage(component, route);
    return <Route path={path} exact={exact} component={ComponentWithLayout} key={`route-${index + 1}`} />;
  });

  return routes;
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Switch>
            {_generateRoutes()}
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
