import { combineReducers } from 'redux';

import globalReducer from './global.reducer';
import loginReducer from '../../components/pages/login/login.reducer';
import dashboardReducer from '../../components/pages/dashboard/dashboard.reducer';
import dashboardDetailReducer from '../../components/pages/dashboard-detail/dashboard-detail.reducer';
import myHelpReducer from '../../components/pages/myhelps/myhelps.reducer';
import myHelpDetailReducer from '../../components/pages/myhelps-detail/myhelps-detail.reducer';
import receivedBidsReducer from '../../components/pages/receivedbids/receivedbids.reducer';
import placedBidsReducer from '../../components/pages/placedbids/placedbids.reducer';
import createHelpReducer from '../../components/pages/createhelp/createhelp.reducer';
import bidDeailReducer from '../../components/pages/placed-bid-detail/placed-bid-detail.reducer';

const reducers = combineReducers({
    globalReducer,
    loginReducer,
    dashboardReducer,
    dashboardDetailReducer,
    myHelpReducer,
    myHelpDetailReducer,
    receivedBidsReducer,
    placedBidsReducer,
    createHelpReducer,
    bidDeailReducer
});

export default reducers;