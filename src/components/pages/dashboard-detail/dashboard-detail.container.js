import { connect } from 'react-redux';

import DashboardDetail from './dashboard-detail.component';
import { showHidePlaceBidsModal } from './dashboard-detail.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    showHidePlaceBidsModal: () => dispatch(showHidePlaceBidsModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardDetail);