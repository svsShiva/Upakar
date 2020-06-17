import { globalActionTypes } from './action-types'

export const showLoader = () => {
    return {
        type: globalActionTypes.SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: globalActionTypes.HIDE_LOADER
    }
}

export const updateLoggedUser = (data) => {
    return {
        type: globalActionTypes.UPDATE_LOGGED_USER,
        payload: data
    }
}

export const updateLoggedUserProfile = (data) => {
    return {
        type: globalActionTypes.UPDATE_LOGGED_USER_PROFILE,
        payload: data
    }
}
