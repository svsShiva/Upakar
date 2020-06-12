import { placedbidDetailActionTypes } from "../../../redux/actions/action-types";

export const showData = (data) => ({
    type: placedbidDetailActionTypes.SHOW_DATA,
    payload: data
});
export const showHideEndHelp =()=>({
    type:placedbidDetailActionTypes.SHOW_HIDE_ENDHELP_MODAL
})