import { receivedbidDetailActionTypes } from "../../../redux/actions/action-types";

export const showData = (data) => ({
    type: receivedbidDetailActionTypes.SHOW_DATA,
    payload: data
});
