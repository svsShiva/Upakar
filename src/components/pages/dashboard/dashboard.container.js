import { connect } from 'react-redux';

import Dashboard from './dashboard.component';
import { refreshFlatlist } from './dashboard.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    refreshFlatlist: () => dispatch(refreshFlatlist())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);