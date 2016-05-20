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
  ScrollView
} from 'react-native';

import Camera from 'react-native-camera'; // for IOS
//react-native-barcodescanner for Android

import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import Popup from 'react-native-popup';

import _ from 'lodash';
import formats from './licenseFormats.js'

var styles = StyleSheet.create({

});

class KCam extends Component {
  constructor(props){
    super(props);
    this.state = {
      cameraType : "back"
    };
  }

  componentWillUnmount() {
     console.log('Will Unmount');
   }

  _switchCamera() {
    // var state = this.state;
    // state.cameraType = state.cameraType === Camera.constants.Type.back
    //   ? Camera.constants.Type.front : Camera.constants.Type.back;
    // this.setState(state);
  }

  handleCloseClick(){
    Actions.pop();
  }

  onBarCodeRead(data){
    // this.popup.alert('code discovered :'+ JSON.stringify(data.data));
    this.popup.alert('parse informations :'+ this.decodeDriverLicense(data.data));
    // this.popup.alert('data :'+data);
    // +data
  }

  handleTakePictureClick() {
    this.camera.capture()
    .then((data) => {
      // console.log(data);

    })
    .catch(err=>console.error(err));
  }

  decodeDriverLicense(data){

    let index = 0;
    let decoded = [];
    let format = null;
    let indexOfData = null;
    let dataElementSeparator = null;
    let version = null;

    formats.every((item)=>{
      item.header.every((headerItem)=>{
        if (headerItem.value){
          // fire error or break like this to avoid continue
        }

        if (headerItem.id == "version"){
          version = data.substring(index,index+headerItem.length);
          if (data.substring(index,index+headerItem.length) !== headerItem.value){
            // we have to test another definition
            // raz index pointer
            index = 0;
            return false;
          }else {
            format = item;
          }
        }
        if (headerItem.id == "dataOffset"){
          indexOfData = data.substring(index,index+headerItem.length);
        }

        if (headerItem.id == "dataElementSeparator"){
          dataElementSeparator = data.substring(index,index+headerItem.length);
        }

        if (format && indexOfData && dataElementSeparator)
          return false;

        // decoded.push(">"+item.description + " : >" +data.substring(index,index+item.length)+"<");
        index += headerItem.length;
        return true;
      });
      if (format && indexOfData)
        return false;

      return true;
    });

    if (format){
      _.each(data.substring(indexOfData,data.length).split(dataElementSeparator),(content)=>{
        format.dataElements.every((element)=>{
            if (element.code===content.substring(0,3)){
              decoded.push("("+content.substring(0,3) + ") " + element.description + " : " +content.substring(3,content.length));
              return false;
            }
            return true;
        });
      });
    }else{
      decoded.push("No definition format found for current asked : " + version);
    }

    decoded.push(decoded.length + " elements");
    return decoded.join("\n");
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Camera ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          barCodeTypes={["pdf417"]}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          ></Camera>
        </View>
        <Popup ref={(popup) => { this.popup = popup }}/>
      </View>
    )
  }
}

// <View style={styles.btnContainer}>
//   <TouchableOpacity onPress={this.handleCloseClick} activeOpacity={0.4}>
//     <Image source={require('./images/btn_close.png')} style={styles.btnClose}></Image>
//   </TouchableOpacity>
// </View>

var width = Dimensions.get('window').width;
var bottomBarHeight = 50;


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  btnContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left:0,
    height: bottomBarHeight,
    width: width,
    borderColor: '#d6d7da',
    justifyContent: 'space-around'
  },
  componentTabs: {
    flex: 1,
    flexDirection: 'column',
    width: width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  btnTakePicture:{
    bottom: 20,
  },
  btnClose: {
    width:30,
    height:30,
    bottom:20
  },
  btnRight: {
    width:30,
    height:30,
    opacity:0
  }
});

module.exports = KCam;
