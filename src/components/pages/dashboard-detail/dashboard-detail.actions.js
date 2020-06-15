import { dashboardDetailActionTypes, dashboardActionTypes } from "../../../redux/actions/action-types";

export const showHidePlaceBidsModal = () => ({
    type: dashboardActionTypes.SHOW_HIDE_PLACEBIDS_MODAL
});

export const placeBid = (data) => ({
    type: dashboardDetailActionTypes.PLACE_BID,
    payload: data
});