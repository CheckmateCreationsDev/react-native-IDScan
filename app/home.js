'use strict';

import React, {
  Component,
  Image,
  MapView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';

import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import KCam from './kcam.js';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var styles = StyleSheet.create({
  map: {
    height: height,
    width: width,
    top: 0
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: 150,
    height: 20,
    borderWidth: 0.5,
    borderColor: '#aaaaaa',
    fontSize: 13,
    padding: 4,
  },
  changeButton: {
    alignSelf: 'center',
    marginTop: 5,
    padding: 3,
    borderWidth: 0.5,
    borderColor: '#777777',
  },
  image: {
    width: 30,
    height: 30,
    position: 'relative',
    top: 200
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1
  },
  btnTag: {
  },
  btnZoom: {
    opacity:0.4
  },
  btnSettings: {
    opacity:0.4
  },
  bottomIconsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 20,
    left:0,
    width:width
  }

});

class Home extends Component {
  constructor(props){
    super(props);
  }

render() {
  return (
    <View style={styles.container}>
      <KCam/>
    </View>);
  }
}

module.exports = Home;
