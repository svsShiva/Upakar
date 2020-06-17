import { globalActionTypes } from '../actions/action-types';

const initialState = {
    loaderEnabled: false,
    loggedUser: undefined,
    loggedUserProfile: undefined
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case globalActionTypes.SHOW_LOADER: {
            return {
              ...state,
              loaderEnabled: true,
            }
          }
          case globalActionTypes.HIDE_LOADER: {
            return {
              ...state,
              loaderEnabled: false,
            }
          }
          case globalActionTypes.UPDATE_LOGGED_USER: {
            return {
              ...state,
              loggedUser: action.payload,
            }
          }
          case globalActionTypes.UPDATE_LOGGED_USER_PROFILE: {
            return {
              ...state,
              loggedUserProfile: action.payload,
            }
          }
        default: return state;
    }
}

export default globalReducer;