import { dashboardActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    isWorking: "false"
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case dashboardActionTypes.TEST_SAMPLE:
            return {
                ...state,
                isWorking: "true"
            }
        default: return state;
    }
}

export default dashboardReducer;