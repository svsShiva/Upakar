export const globalActionTypes = {
  SHOW_LOADER: "SHOW_LOADER",
  HIDE_LOADER: "HIDE_LOADER",
  UPDATE_LOGGED_USER: "UPDATE_LOGGED_USER",
  UPDATE_LOGGED_USER_PROFILE: "UPDATE_LOGGED_USER_PROFILE"
};

export const dashboardActionTypes = {
  REFRESH_FLATLIST: "REFRESH_FLATLIST",
  SELECT_HELP: "SELECT_HELP",
  SHOW_HIDE_PLACEBIDS_MODAL: "SHOW_PLACEBIDS_MODAL"
};

export const loginActionTypes = {
  TEST_SAMPLE_LOGIN: 'TEST_SAMPLE_LOGIN',
};

export const dashboardDetailActionTypes = {
  PLACE_BID: "PLACE_BID"
};

export const myHelpsActionTypes = {};

export const myHelpsDetailActionTypes = {};

export const placedBidsActionTypes = {
  SELECT_BID: 'SELECT_BID',
};

export const receivedBidsActionTypes = {
  SELECT_BID: 'SELECT_BID',

};

export const createHelpActionTypes = {};

export const placedbidDetailActionTypes = {
  SHOW_DATA: "SHOW_PLACED_BID",
  SHOW_HIDE_ENDHELP_MODAL: "SHOW_END HELP_MODAL",
  END_HELP: "END_HELP"
};

export const receivedbidDetailActionTypes = {
  SHOW_DATA: "SHOW_RECEIVED_BID",
  SHOW_HIDE_ACCEPT_BID_MODAL: "SHOW ACCEPT BID MODAL",
  SHOW_HIDE_ENDHELP_MODAL: "SHOW_END HELP_MODAL",
  END_HELP: 'END HELP',
  ACCEPT_BID: 'ACCEPT_BID'
};

export const profileActionTypes = {
  SHOW_DATA: "SHOW_PROFILE"
}