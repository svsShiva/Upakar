import {placedBidsActionTypes} from '../../../redux/actions/action-types';

const initialState = {
  selectedBid: {},
};

const placedBidsReducer = (state = initialState, action) => {
  switch (action.type) {
    case placedBidsActionTypes.SELECT_BID:
      return {
        ...state,
        selectedBid: action.payload,
      };
    default:
      return state;
  }
};

export default placedBidsReducer;
