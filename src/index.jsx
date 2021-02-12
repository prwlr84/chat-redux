// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
// internal modules

import '../assets/stylesheets/application.scss';
import msgsReducer from './reducers/msgs_reducer';
import channelsReducer from './reducers/channels_reducer';
import activeChannelReducer from './reducers/activeChannel_reducer';
import curUsrReducer from './reducers/curUsr_reducer';
import App from './components/app';
// State and reducers
const initialState = {
  channels: ['general', 'amsterdam', 'spain'],
  activeChannel: '',
  curUsr: '',
  msgs: []
}

const reducers = combineReducers({
  msgs: msgsReducer,
  channels: channelsReducer,
  activeChannel: activeChannelReducer,
  curUsr: curUsrReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware( logger, reduxPromise));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
