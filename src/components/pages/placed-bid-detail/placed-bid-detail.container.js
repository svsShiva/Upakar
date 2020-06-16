import { connect } from 'react-redux';

import PlacedbidsDetails from './placed-bid-detail.component';
import { showHideEndHelp, endHelp } from './placed-bid-detail.actions';
import { showLoader, hideLoader } from '../../../redux/actions/global.actions';

const mapStateToProps = (state, ownProps) => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({
  showHideEndHelp: () => dispatch(showHideEndHelp()),
  endHelp: data => dispatch(endHelp(data)),
  showLoader: () => dispatch(showLoader()),
  hideLoader: () => dispatch(hideLoader())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlacedbidsDetails);
