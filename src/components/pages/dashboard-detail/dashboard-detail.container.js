import { connect } from 'react-redux';

import DashboardDetail from './dashboard-detail.component';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardDetail);