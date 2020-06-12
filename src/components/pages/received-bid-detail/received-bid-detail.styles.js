import {StyleSheet} from 'react-native';

import {colorDefs, appColors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.BG,
    flex: 1,
  },
  
  bidContainer: {
    flexDirection: 'column',
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
    margin: 5,
    elevation: 1,
  },
  bidContainerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  lblTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
  },
  lblDesc: {
    fontSize: 15,
    padding: 10,
  },
  submit: {
    backgroundColor: colorDefs.DARK_GREEN,
    alignSelf: 'center',
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: colorDefs.DARK_GREEN,
    borderRadius: 25,
    width: 250,
  },
  otpConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  otpInput: {
    width: 100,
    borderBottomColor: colorDefs.DARK_GREY,
    margin: 10,
  },

  lblSubmit: {
    alignSelf: 'center',
    color: colorDefs.WHITE,
    fontSize: 15,
    fontWeight: 'bold',
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
  lblOtp: {
    marginLeft: 20,
    fontSize: 16,
  },
  rowConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
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
    margin: 5,
    elevation: 1,
    // marginBottom: 40,
  },
  lables: {
    fontSize: 18,
    color: colorDefs.LIGHT_GREEN,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  chatbtn: {
    height: 65,
    width: 65,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.SEMI_TRANSPARENT,
  },
  textInput: {
    margin: 10,
    backgroundColor: appColors.TEXT_WHITE,
    borderRadius: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    width: '80%',
    // marginTop: 25,
    marginBottom: 0,
  },
  modalSaveBtn: {
    flex: 1,
    backgroundColor: colorDefs.DARK_GREEN,
    borderRadius: 20,
    elevation: 2,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  modalCancelBtn: {
    flex: 1,
    backgroundColor: colorDefs.DARK_GREY,
    borderRadius: 20,
    elevation: 2,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  modalBtnsContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 75,
    padding: '5%',
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  getOtptext: {
    // textAlign: 'center',
    width: '75%',
    // padding: 2,
    fontSize: 12,
  },
  heading: {
    fontSize: 20,
    color: colorDefs.DARK_GREEN,
    alignSelf: 'center',
    fontWeight: 'bold',
    padding: 5,
    // margin: 2,
  },
  modalView: {
    margin: 20,
    backgroundColor: colorDefs.SMOKE_WHITE,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    height: '35%',
  },
});