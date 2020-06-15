import { dashboardActionTypes, dashboardDetailActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    showPlaceBidsModal: false,
    loggedUserBid: undefined
}

const dashboardDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case dashboardActionTypes.SHOW_HIDE_PLACEBIDS_MODAL:
            return {
                ...state,
                showPlaceBidsModal: !state.showPlaceBidsModal
            }
        case dashboardDetailActionTypes.PLACE_BID:
            return {
                ...state,
                loggedUserBid: action.payload
            }
        default: return state;
    }
}

export default dashboardDetailReducer;