import { receivedbidDetailActionTypes, receivedBidsActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    message: "recieved-detail",
    data: {}
}

const receivedBidDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case receivedbidDetailActionTypes.SHOW_DATA: 
            return {
                ...state,
                data: action.payload
            }
        default: return state;
    }
}

export default receivedBidDetailReducer;