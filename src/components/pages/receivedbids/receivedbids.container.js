import { connect } from 'react-redux';

import ReceivedBids from './receivedbids.component';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReceivedBids);