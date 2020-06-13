import {StyleSheet, YellowBox} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {colorDefs, appColors} from '../../../constants/colors';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.BG,
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
    backgroundColor: appColors.BG,
    shadowOpacity: 0.2,
    shadowColor: appColors.TEXT_SEMI,
    shadowRadius: 2,
    marginVertical: 5,
    margin: 5,
    elevation: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderLeftWidth: 10,
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
    width: '70%',
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
    color: appColors.TEXT_SEMI,
  },
  titleStatusContainer: {
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-between',
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
    marginRight: 10,
    // backgroundColor:'red'
  },
  lblStatus: {
    fontSize: 15,
    alignSelf: 'flex-end',
    textAlign: 'center',
    padding:5,
    borderWidth: 1,
    borderRadius: 5,
    width: '30%',
    color: appColors.TEXT_WHITE,
  },
  lblDuration: {
    fontSize: 15,
    padding: 5,
  },
});
