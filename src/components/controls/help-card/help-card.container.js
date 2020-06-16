import { connect } from 'react-redux';

import HelpCard from './help-card.component';
import { selectHelp } from '../../pages/dashboard/dashboard.actions';
import { showLoader, hideLoader } from '../../../redux/actions/global.actions';


const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    selectHelp: (data) => dispatch(selectHelp(data)),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HelpCard);