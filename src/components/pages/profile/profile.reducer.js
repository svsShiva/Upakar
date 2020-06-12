import { profileActionTypes } from "../../../redux/actions/action-types";
import { profileData } from '../../../data/profile';

const initialState = {
    data: profileData[0]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case profileActionTypes.SHOW_DATA: 
            return {
                ...state,
                data: action.payload
            }
        default: return state;
    }
}

export default profileReducer;