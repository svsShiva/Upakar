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
