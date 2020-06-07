import { dashboardActionTypes } from "../../../redux/actions/action-types";

export const refreshFlatlist = () => ({
    type:  dashboardActionTypes.REFRESH_FLATLIST
});

export const selectHelp = (data) => ({
    type: dashboardActionTypes.SELECT_HELP,
    payload: data
})
