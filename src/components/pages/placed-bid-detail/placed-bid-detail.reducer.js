import {placedbidDetailActionTypes} from '../../../redux/actions/action-types';

const initialState = {
  message: 'placedbid-detail',
  data: {},
  showEndHelp: false,
  endHelp: undefined,
};

const placedBidDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case placedbidDetailActionTypes.SHOW_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case placedbidDetailActionTypes.SHOW_HIDE_ENDHELP_MODAL:
      return {
        ...state,
        showEndHelp: !state.showEndHelp,
      };
    case placedbidDetailActionTypes.END_HELP:
      return {
        ...state,
        endHelp: action.payload,
      };
    default:
      return state;
  }
};

export default placedBidDetailReducer;
