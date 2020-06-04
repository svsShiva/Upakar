import {StyleSheet, YellowBox} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {colorDefs} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colorDefs.DARK_GREEN,
    padding: 10,
    borderRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowColor: colorDefs.LIGHT_GREY,
    shadowRadius: 2,
    marginVertical: 4,
    elevation: 1,
  },
  wrapper: {
    flex: 1,
  },

  box: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  lblCredit: {
    fontSize: 18,
    padding: 5,
  },
  lblduration: {
    fontSize: 18,
    padding: 5,
    // alignSelf:'flex-end'
    
  },
  title: {
    fontSize: 18,
    padding: 5,
  },
  lblContainer:{
    flex:1,
    flexDirection:'column',
    // backgroundColor:colorDefs.DARK_GREY,
  },
  lblContainer_2:{
    flex:1,
    flexDirection:'column',
    // backgroundColor:colorDefs.LIGHT_GREEN,
    alignItems:'flex-end'
  }
});
