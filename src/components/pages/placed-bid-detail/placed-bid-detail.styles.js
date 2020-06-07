import {StyleSheet} from 'react-native';

import {colorDefs} from '../../../constants/colors';

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
    marginBottom: 40,
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
  },
  textFields: {
    fontSize: 16,
    paddingVertical: 10,
  },
  helpDetails: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
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
    // backgroundColor: 'red',
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
    padding: 10,
    margin: 5,
  },
  floatingButton: {
    position: 'absolute',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 20,
    backgroundColor: colorDefs.LIGHT_GREEN,
    borderRadius: 50,
    padding: 10,
  },
  lblChat: {
    padding: 10,
    color: colorDefs.WHITE,
  },
});
