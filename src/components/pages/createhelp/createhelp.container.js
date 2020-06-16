import { connect } from 'react-redux';

import CreateHelp from './createhelp.component';
import { showLoader, hideLoader } from '../../../redux/actions/global.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateHelp);