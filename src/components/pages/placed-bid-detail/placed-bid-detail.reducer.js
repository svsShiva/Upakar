import { placedbidDetailActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    message: "placedbid-detail",
    data: {}
}

const placedBidDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case placedbidDetailActionTypes.SHOW_DATA:
            return {
                ...state,
                data: action.payload
            }
        default: return state;
    }
}

export default placedBidDetailReducer;