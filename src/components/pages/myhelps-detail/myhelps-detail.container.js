import { connect } from 'react-redux';

import MyHelpDetail from './myhelps-detail.component';
import { showLoader, hideLoader } from '../../../redux/actions/global.actions';
import { showData } from '../received-bid-detail/received-bid-detail.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    showData: (data) => dispatch(showData(data)),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyHelpDetail);