import { connect } from 'react-redux';

import Dashboard from './dashboard.component';
import { testAction } from './dashboard.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    testAction: () => dispatch(testAction())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);