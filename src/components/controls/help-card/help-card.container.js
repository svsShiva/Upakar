import { connect } from 'react-redux';

import HelpCard from './help-card.component';
import { selectHelp } from '../../pages/dashboard/dashboard.actions'

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    selectHelp: (data) => dispatch(selectHelp(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HelpCard);