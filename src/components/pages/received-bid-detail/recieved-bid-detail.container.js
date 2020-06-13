import {connect} from 'react-redux';

import ReceivedbidsDetails from './received-bid-detail.component';
import {showHideAcceptBid} from './received-bid-detail.actions';
import {showData} from '../profile/profile.actions';

const mapStateToProps = (state, ownProps) => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({
  showHideAcceptBid: () => dispatch(showHideAcceptBid()),
  showProfile: data => dispatch(showData(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReceivedbidsDetails);
