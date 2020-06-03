import { dashboardActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    refreshFlatlist: false
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case dashboardActionTypes.REFRESH_FLATLIST:
            return {
                ...state,
                refreshFlatlist: !state.refreshFlatlist
            }
        default: return state;
    }
}

export default dashboardReducer;