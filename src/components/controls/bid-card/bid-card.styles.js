import {StyleSheet, YellowBox} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {colorDefs} from '../../../constants/colors';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colorDefs.WHITE,
    flex: 1,
  },
  flatlist: {
    flex: 1,
    // padding: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    backgroundColor: colorDefs.WHITE,
    shadowOpacity: 0.2,
    shadowColor: colorDefs.LIGHT_GREY,
    shadowRadius: 2,
    marginVertical: 4,
    margin:5,
    elevation: 1,
  },
  wrapper: {
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  lblCredit: {
    fontSize: 15,
    padding: 5,
  },
  lblOtp: {
    fontSize: 15,
    padding: 5,
  },
  title: {
    fontSize: 18,
    padding: 5,
  },
  creditContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  otpContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  lable: {
    fontSize: 15,
    color: colorDefs.DARK_GREY,
  },
  statusConatiner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 15,
  },
  containerOne: {
    flex: 1,
    flexDirection: 'row',
  },
  containerTwo: {
    flex: 1,
    flexDirection: 'row',
  },
  durationContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lblStatus: {
    fontSize: 15,
    padding: 5,
  },
  lblDuration: {
    fontSize: 15,
    padding: 5,
    marginRight: 5,
  },
});
