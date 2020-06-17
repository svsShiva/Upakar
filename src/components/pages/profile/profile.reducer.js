import { profileActionTypes } from "../../../redux/actions/action-types";
import { profiles } from '../../../data/profiles';


const initialState = {
    data: undefined
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