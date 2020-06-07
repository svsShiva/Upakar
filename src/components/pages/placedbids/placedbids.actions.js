import {placedBidsActionTypes} from '../../../redux/actions/action-types';

export const selectBid = data => ({
  type: placedBidsActionTypes.SELECT_BID,
  payload: data,
});
