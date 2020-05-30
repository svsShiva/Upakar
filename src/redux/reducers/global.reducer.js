import { globalActionTypes } from '../actions/action-types';

const initialState = {
    testField: "Upakar",
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case globalActionTypes.SAMPLE_ACTION:
            return {
                ...state
            };
        default: return state;
    }
}

export default globalReducer;