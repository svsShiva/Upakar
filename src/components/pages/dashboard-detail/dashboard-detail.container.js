import { connect } from 'react-redux';

import DashboardDetail from './dashboard-detail.component';
import { showHidePlaceBidsModal } from './dashboard-detail.actions';
import { showData } from '../profile/profile.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    showHidePlaceBidsModal: () => dispatch(showHidePlaceBidsModal()),
    showProfile: (data) => dispatch(showData(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardDetail);