import { receivedbidDetailActionTypes } from "../../../redux/actions/action-types";

export const showData = (data) => ({
    type: receivedbidDetailActionTypes.SHOW_DATA,
    payload: data
});
export const showHideAcceptBid =()=>({
    type:receivedbidDetailActionTypes.SHOW_HIDE_ACCEPT_BID_MODAL
})