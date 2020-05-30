import { globalActionTypes } from './action-types'
import NetInfo from "@react-native-community/netinfo";

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
  
  export const checkConnectivity = (dispatch) => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      dispatch(updateConnectivity(state.isConnected));
     });
  
      NetInfo.fetch().then((state) => {
        dispatch(updateConnectivity(state.isConnected));
      });
  }
  export const updateConnectivity = (value) => {
    return {
      type: globalActionTypes.UPDATE_CONNECTIVITY,
      payload: value
    }
  }