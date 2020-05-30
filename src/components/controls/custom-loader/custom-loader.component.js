import React, { Component } from 'react';
import {
  Image,
  View, StyleSheet, Modal
} from 'react-native';

import imgLoader from "../../../assets/images/loader.gif";

export default function CustomLoader(props) {
    return (
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={props.loaderEnabled}
        >
          <View style={styles.container}>
            <Image source={imgLoader} style={styles.loader}/>
          </View>
        </Modal>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF"
  },
  loader:{
    width:50,
    height:50,
  }
})