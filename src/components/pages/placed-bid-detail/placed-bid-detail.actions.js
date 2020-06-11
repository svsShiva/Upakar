import { placedbidDetailActionTypes } from "../../../redux/actions/action-types";

export const showData = (data) => ({
    type: placedbidDetailActionTypes.SHOW_DATA,
    payload: data
});
