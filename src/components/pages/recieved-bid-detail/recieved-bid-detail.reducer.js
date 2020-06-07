import { receivedbidDetailActionTypes } from "../../../redux/actions/action-types";

const initialState = {
    message: "recieved-detail"
}

const recievedbidDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default recievedbidDetailReducer;