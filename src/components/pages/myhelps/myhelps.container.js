import { connect } from 'react-redux';

import MyHelp from './myhelps.component';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyHelp);