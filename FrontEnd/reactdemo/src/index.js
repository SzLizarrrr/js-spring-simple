import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import Products from './containers/products';
import Login from './containers/login';
import Logout from './containers/logout';
import AddProduct from './containers/add-product';
import EditProduct from './containers/edit-product';
import auth from './components/auth-ho';

import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/products/:name" component={EditProduct} />
            <Route path="/addproduct" component={auth(AddProduct)} />
            <Route path="/" component={auth(Products)} />
          </Switch>
        </App>
      </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
