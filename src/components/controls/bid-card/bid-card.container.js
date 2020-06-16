import { connect } from 'react-redux';

import BidCard from './bid-card.component';
import { showLoader, hideLoader } from '../../../redux/actions/global.actions';
import { selectBid } from '../../pages/placedbids/placedbids.actions';

const mapStateToProps = (state, ownProps) => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({
  selectBid: data => dispatch(selectBid(data)),
  showLoader: () => dispatch(showLoader()),
  hideLoader: () => dispatch(hideLoader())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BidCard);
