import {StyleSheet} from 'react-native';

import {colorDefs} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colorDefs.WHITE,
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
    right: 30,
    bottom: 30,
    backgroundColor: colorDefs.LIGHT_GREEN,
    borderRadius: 50,
    padding: 10,
  },
  lblChat: {
    padding: 10,
    color: colorDefs.WHITE,
  },
});
