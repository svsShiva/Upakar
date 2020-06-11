import { dashboardActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    showPlaceBidsModal: false,
    isBidPlaced: false
}

const dashboardDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case dashboardActionTypes.SHOW_HIDE_PLACEBIDS_MODAL: 
            return {
                ...state,
                showPlaceBidsModal: !state.showPlaceBidsModal
            }
        default: return state;
    }
}

export default dashboardDetailReducer;