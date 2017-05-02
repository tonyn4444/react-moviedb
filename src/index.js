import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import AppRouter from './AppRouter';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
  	<AppRouter />
  </Provider>,
  document.getElementById('root')
);
