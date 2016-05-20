
'use strict';

import React, {
  AppRegistry,
  Component,
  Image,
  MapView,
  PropTypes,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  TouchableHighlight,
  ScrollView,
  Navigator
} from 'react-native';

import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import Home from './app/home.js';


const reducerCreate = params=>{
  const defaultReducer = Reducer(params);
  return (state, action)=>{
    return defaultReducer(state, action);
  }
};

class pdf417 extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="initial" component={Home} initial={true} title="Home"/>
        </Scene>
      </Router>
    )
  }
}


AppRegistry.registerComponent('pdf417', () => pdf417);
