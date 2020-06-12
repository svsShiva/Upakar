import { connect } from 'react-redux';

import ReceivedbidsDetails from './received-bid-detail.component';
import {showHideAcceptBid} from './received-bid-detail.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    showHideAcceptBid: ()=>dispatch(showHideAcceptBid())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReceivedbidsDetails);