import {StyleSheet} from 'react-native';

import {colorDefs, appColors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.SEMI_TRANSPARENT,
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
  durationContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  lable: {
    fontSize: 15,
    color: colorDefs.DARK_GREY,
  },
  expiryContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  lblExpiration: {
    fontSize: 15,
    padding: 5,
    marginBottom: 5,
  },
});
