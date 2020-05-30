import { loginActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    isWorking: "false"
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginActionTypes.TEST_SAMPLE_LOGIN:
            return {
                ...state,
                isWorking: "true"
            }
        default: return state;
    }
}

export default loginReducer;