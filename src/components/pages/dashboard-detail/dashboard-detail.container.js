import { connect } from 'react-redux';

import DashboardDetail from './dashboard-detail.component';
import { showHidePlaceBidsModal, placeBid } from './dashboard-detail.actions';
import { showData } from '../profile/profile.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    showHidePlaceBidsModal: () => dispatch(showHidePlaceBidsModal()),
    showProfile: (data) => dispatch(showData(data)),
    placeBid: (data) => dispatch(placeBid(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardDetail);