import { dashboardActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    message: "Dashboard-detail"
}

const bidDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default bidDetailReducer;