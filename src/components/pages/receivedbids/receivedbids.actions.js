import {receivedBidsActionTypes} from '../../../redux/actions/action-types';

export const selectBid = data => ({
  type: receivedBidsActionTypes.SELECT_BID,
  payload: data,
});
