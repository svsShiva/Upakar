import {connect} from 'react-redux';

import PlacedbidsDetails from './placed-bid-detail.component';
import {showHideEndHelp, endHelp} from './placed-bid-detail.actions';

const mapStateToProps = (state, ownProps) => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({
  showHideEndHelp: () => dispatch(showHideEndHelp()),
  endHelp: data => dispatch(endHelp(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlacedbidsDetails);
