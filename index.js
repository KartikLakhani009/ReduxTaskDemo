/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/Reducer/index';
import thunk from 'redux-thunk';
import AppNavigator from './src/route/AppNavigator';

const store = createStore(reducer, applyMiddleware(thunk));

const Appcontainer = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Appcontainer);
