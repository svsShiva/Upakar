import { connect } from 'react-redux';

import DashboardDetail from './dashboard-detail.component';
import { showLoader, hideLoader } from '../../../redux/actions/global.actions';
import { showHidePlaceBidsModal, placeBid } from './dashboard-detail.actions';
import { showData } from '../profile/profile.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    showHidePlaceBidsModal: () => dispatch(showHidePlaceBidsModal()),
    showProfile: (data) => dispatch(showData(data)),
    placeBid: (data) => dispatch(placeBid(data)),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardDetail);