import { combineReducers } from 'redux';


import globalReducer from './global.reducer';
import dashboardReducer from '../../components/pages/dashboard/dashboard.reducer';

const reducers = combineReducers({
    globalReducer,
    dashboardReducer
});

export default reducers;