import React from 'react';
import {
  Image,
  View,
  Modal,
  Text
} from 'react-native';

import imgLoader from "../../../assets/images/loader.gif";
import { appColors } from '../../../constants/colors';
import { styles } from './custom-loader.styles';

function CustomLoader(props) {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={props.state.globalReducer.loaderEnabled}
    >
      <View style={styles.container}>
        <Image source={imgLoader} style={styles.loader} />
      </View>
    </Modal>
  );
}

export default CustomLoader;