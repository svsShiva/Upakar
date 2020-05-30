import { connect } from 'react-redux';

import Login from './login.component';
import { testLoginAction } from './login.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    testAction: () => dispatch(testLoginAction())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);