import { connect } from 'react-redux';

import Dashboard from './dashboard.component';
import { testAction } from './dashboard.actions';
import { showLoader, hideLoader, checkConnectivity } from '../../../redux/actions/global.actions'

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    testAction: () => dispatch(testAction()),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader()),
    checkConnectivity: () => checkConnectivity(dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);