import { connect } from 'react-redux';

import ReceivedBids from './receivedbids.component';
import { showData } from '../received-bid-detail/received-bid-detail.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    showData: (data) => dispatch(showData(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReceivedBids);