import {connect} from 'react-redux';

import CustomDrawer from './custom-drawer.component';
import {selectBid} from '../../pages/placedbids/placedbids.actions';

const mapStateToProps = (state, ownProps) => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({
  selectBid: data => dispatch(selectBid(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomDrawer);
