import { receivedbidDetailActionTypes, receivedBidsActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    message: "recieved-detail",
    data: {},
    showAcceptBid:false,
    acceptBid:undefined
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
        case receivedbidDetailActionTypes.ACCEPT_BID:
            return{
                ...state,
                acceptBid:action.payload
            }    
        default: return state;
    }
}

export default receivedBidDetailReducer;