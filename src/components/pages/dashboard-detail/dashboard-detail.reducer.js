import { dashboardActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    message: "Dashboard-detail"
}

const dashboardDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default dashboardDetailReducer;