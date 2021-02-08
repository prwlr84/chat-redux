// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import msgsReducer from './reducers/msgs_reducer';
import channelsReducer from './reducers/channels_reducer';
import activeChannelReducer from './reducers/activeChannel_reducer';
import curUsrReducer from './reducers/curUsr_reducer';

// State and reducers
const state = {
  msgs: [],
  channels: ['general', 'react', 'paris'],
  activeChannel: 'general',
  curUsr: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

const reducers = combineReducers({
  msgs: msgsReducer,
  channels: channelsReducer,
  activeChannel: activeChannelReducer,
  curUsr: curUsrReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
