import { receivedbidDetailActionTypes, receivedBidsActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    message: "recieved-detail",
    data: {},
    showAcceptBid:false
}

const receivedBidDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case receivedbidDetailActionTypes.SHOW_DATA: 
            return {
                ...state,
                data: action.payload
            }
        case receivedbidDetailActionTypes.SHOW_HIDE_ACCEPT_BID_MODAL:
            return{
                ...state,
                showAcceptBid:!state.showAcceptBid
            }
        default: return state;
    }
}

export default receivedBidDetailReducer;