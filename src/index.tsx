import React from 'react';
import ReactDOM from 'react-dom';
import configureStore, { history } from "./store/configureStore";
import './style/index.scss';
import AppContainer from './component/containers/AppContainer';
import * as serviceWorker from './serviceWorker';

export const { store } = configureStore();

ReactDOM.render(
  <AppContainer store={store} history={history} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
