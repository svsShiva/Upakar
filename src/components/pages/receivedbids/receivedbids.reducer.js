import {receivedBidsActionTypes} from '../../../redux/actions/action-types';

const initialState = {
  selectedBid: {},
};

const receivedBidsReducer = (state = initialState, action) => {
  switch (action.type) {
    case receivedBidsActionTypes.SELECT_BID:
      return {
        ...state,
        selectedBid: action.payload,
      };
    default:
      return state;
  }
};

export default receivedBidsReducer;
