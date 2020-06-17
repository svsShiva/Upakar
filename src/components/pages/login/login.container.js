import { connect } from 'react-redux';

import Login from './login.component';
import { testLoginAction } from './login.actions';
import { showLoader, hideLoader, updateLoggedUser, updateLoggedUserProfile } from '../../../redux/actions/global.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    testAction: () => dispatch(testLoginAction()),
    updateLoggedUser: (data) => dispatch(updateLoggedUser(data)),
    updateLoggedUserProfile: (data) => dispatch(updateLoggedUserProfile(data)),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);