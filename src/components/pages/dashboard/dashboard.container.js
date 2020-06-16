import { connect } from 'react-redux';

import Dashboard from './dashboard.component';
import { refreshFlatlist } from './dashboard.actions';
import { showLoader, hideLoader } from '../../../redux/actions/global.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    refreshFlatlist: () => dispatch(refreshFlatlist()),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);