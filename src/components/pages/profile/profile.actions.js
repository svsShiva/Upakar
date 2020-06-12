import { profileActionTypes } from "../../../redux/actions/action-types";

export const showData = (data) => ({
    type: profileActionTypes.SHOW_DATA,
    payload: data
});
