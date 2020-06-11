import {StyleSheet} from 'react-native';

import {colorDefs, appColors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colorDefs.SMOKE_WHITE,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colorDefs.SEMI_GREY,
  },
  flatlistWrapper: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
  },
  help: {
    backgroundColor: colorDefs.WHITE,
    padding: 15,
    borderRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowColor: colorDefs.LIGHT_GREY,
    shadowRadius: 2,
    marginVertical: 4,
    elevation: 1,
    // marginBottom: 40,
  },
  bids: {
    backgroundColor: colorDefs.WHITE,
    padding: 15,
    borderRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowColor: colorDefs.LIGHT_GREY,
    shadowRadius: 2,
    marginVertical: 4,
    elevation: 1,
    flexDirection: 'row',
  },
  lables: {
    fontSize: 18,
    color: colorDefs.LIGHT_GREEN,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  buttonWrapper: {
    marginTop: 20,
  },
  button: {
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
  },
  buttonText: {
    color: colorDefs.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    color: colorDefs.LIGHT_GREEN,
    fontWeight: 'bold',
    padding: 5,
  },
  textFields: {
    fontSize: 17,
    paddingVertical: 10,
    marginLeft: 20,
  },
  helpDetails: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    marginLeft: 5,
  },
  helpDuration: {
    fontSize: 16,
    paddingVertical: 10,
    width: 250,
  },
  bidsCountWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    // backgroundColor: 'red'
  },
  baseValueWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    // backgroundColor: 'black'
  },
  profilePic: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    alignItems: 'flex-start',
    borderRadius: 30,
  },
  bidsWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  bidsTextFields: {
    fontSize: 16,
  },
  bidsDetails: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
  },
  submitButtons: {
    backgroundColor: colorDefs.DARK_GREEN,
    padding: 10,
    width: 150,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colorDefs.DARK_GREEN,
    justifyContent: 'center',
    margin: 15,
    height: 40,
  },
  submitBtnText: {
    alignSelf: 'center',
    color: colorDefs.WHITE,
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5,
  },
  submitButtonDisabled: {
    backgroundColor: colorDefs.DARK_GREY,
    padding: 10,
    width: 150,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colorDefs.DARK_GREY,
    justifyContent: 'center',
    margin: 15,
  },
  otpInput: {
    borderBottomWidth: 1,
    borderBottomColor: colorDefs.DARK_GREY,
    width: 150,
  },
  heading: {
    fontSize: 20,
    color: colorDefs.DARK_GREEN,
    alignSelf: 'center',
    fontWeight: 'bold',
    padding: 5,
    margin: 2,
  },
  floatingButton: {
    position: 'absolute',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 75,
    borderRadius: 50,
    padding: 10,
  },
  lblChat: {
    padding: 10,
    color: colorDefs.WHITE,
  },
  lblDesc: {
    fontSize: 15,
    padding: 5,
  },
  rowConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lblHelpDuration: {
    fontSize: 18,
    color: colorDefs.LIGHT_GREEN,
    fontWeight: 'bold',
  },
  lblOtp: {
    marginLeft: 20,
    fontSize: 16,
  },
  chatbtn: {
    height: 65,
    width: 65,
  },
  endHelp: {
    backgroundColor: appColors.GRADIENT_RIGHT,
    height: 40,
    justifyContent: 'center',
    borderColor: appColors.GRADIENT_LEFT,
    borderRadius: 20,
    margin: 10,
  },
  lblendHelp: {
    alignSelf: 'center',
    color: colorDefs.WHITE,
  },
});
