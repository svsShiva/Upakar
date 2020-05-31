import { connect } from 'react-redux';

import MyHelpDetail from './myhelps-detail.component';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyHelpDetail);