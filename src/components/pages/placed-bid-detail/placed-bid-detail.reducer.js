import { placedbidDetailActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    message: "placedbid-detail",
    data: {},
    showEndHelp:false
}

const placedBidDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case placedbidDetailActionTypes.SHOW_DATA:
            return {
                ...state,
                data: action.payload
            }
        case placedbidDetailActionTypes.SHOW_HIDE_ENDHELP_MODAL:
            return{
                ...state,
                showEndHelp:!state.showEndHelp
            }
        default: return state;
    }
}

export default placedBidDetailReducer;