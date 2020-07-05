//Libary
import React, {Component} from 'react';

//Stack NAvigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screen
import WelcomeScreen from '../screen/WelcomeScreen';
import ListView from '../screen/ListViewScreen';

const AuthStack = createStackNavigator(
  {
    WelcomeScreen: {screen: WelcomeScreen},
    ListView: {screen: ListView},
  },
  {
    initialRouteName: 'ListView',
    // initialRouteName: 'WelcomeScreen',
    headerMode: 'none',
  },
);

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;
