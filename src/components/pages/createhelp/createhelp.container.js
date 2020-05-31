import { connect } from 'react-redux';

import CreateHelp from './createhelp.component';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateHelp);