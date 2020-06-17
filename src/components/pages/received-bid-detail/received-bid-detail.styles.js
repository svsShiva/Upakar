import { StyleSheet, Dimensions } from 'react-native';

import { colorDefs, appColors } from '../../../constants/colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    backgroundColor: appColors.BG,
    shadowOpacity: 0.2,
    shadowColor: appColors.TEXT_SEMI,
    shadowRadius: 2,
    marginVertical: 6,
    marginHorizontal: 7,
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
  lblText: {
    fontSize: 15,
    padding: 10,
  },
  submit: {
    backgroundColor: appColors.GRADIENT_LEFT,
    justifyContent: 'center',
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: appColors.GRADIENT_LEFT,
    borderRadius: 25,
    height: 45,
    width: windowWidth - 20
  },
  otpConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  otpInput: {
    width: 100,
    borderBottomColor: appColors.TEXT_SEMI,
    margin: 10,
  },

  lblSubmit: {
    alignSelf: 'center',
    color: appColors.TEXT_WHITE,
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
    color: appColors.TEXT_WHITE,
  },
  lblOtp: {
    marginLeft: 20,
    fontSize: 16,
  },
  rowConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lables: {
    fontSize: 18,
    color: appColors.TEXT_DARK,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  chatbtn: {
    height: 65,
    width: 65,
  },
  centeredView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '45%',
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
    backgroundColor: appColors.GRADIENT_LEFT,
    borderRadius: 20,
    elevation: 2,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  modalCancelBtn: {
    flex: 1,
    backgroundColor: appColors.TEXT_LIGHT,
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
    color: appColors.TEXT_DARK,
    alignSelf: 'center',
    fontWeight: 'bold',
    padding: 5,
    // margin: 2,
  },
  modalScrollView: {
    flex: 1,
    backgroundColor: colorDefs.SEMI_TRANSPARENT,
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
  },
  lblDesc: {
    paddingTop: 0,
    fontSize: 15,
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    color: appColors.TEXT_DARK,
    fontWeight: 'bold',
    padding: 5,
  },
  lbldesc: {
    fontSize: 15,
    padding: 5,
  },

  userDetailContainer: {
    flex: 2,
    flexDirection: 'row',
    marginBottom: 5,
  },
  userDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    marginHorizontal: 10,
  },
  userName: {
    flex: 1,
    fontSize: 16,
  },
  userProfilePic: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
    alignItems: 'flex-start',
  },
});
