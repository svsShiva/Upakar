import { dashboardActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    refreshFlatlist: false,
    selectedHelp: {}
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case dashboardActionTypes.REFRESH_FLATLIST:
            return {
                ...state,
                refreshFlatlist: !state.refreshFlatlist
            }
        case dashboardActionTypes.SELECT_HELP:
            return {
                ...state,
                selectedHelp: action.payload
            }
        default: return state;
    }
}

export default dashboardReducer;