import {connect} from 'react-redux';

import ReceivedbidsDetails from './received-bid-detail.component';
import {showHideAcceptBid, acceptBid} from './received-bid-detail.actions';
import {showData} from '../profile/profile.actions';
import { showLoader, hideLoader } from '../../../redux/actions/global.actions';


const mapStateToProps = (state, ownProps) => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({
  showHideAcceptBid: () => dispatch(showHideAcceptBid()),
  showProfile: data => dispatch(showData(data)),
  acceptBid: data => dispatch(acceptBid(data)),
  showLoader: () => dispatch(showLoader()),
  hideLoader: () => dispatch(hideLoader())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReceivedbidsDetails);
