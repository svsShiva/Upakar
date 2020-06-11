import {StyleSheet} from 'react-native';

import {colorDefs} from '../../../constants/colors';

export const styles = StyleSheet.create({
  acceptConatiner: {
    backgroundColor: colorDefs.BID_ACCEPTED,
    height: 50,
    justifyContent: 'center',
  },
  pendingContainer: {
    backgroundColor: colorDefs.BID_PENDING,
    height: 50,
    justifyContent: 'center',
  },
  lblstatus: {
    alignSelf: 'center',
    color: colorDefs.WHITE,
  },
});
