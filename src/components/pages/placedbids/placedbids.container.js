import { connect } from 'react-redux';

import PlacedBids from './placedbids.component';
import { showData } from '../placed-bid-detail/placed-bid-detail.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    showData: (data) => dispatch(showData(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacedBids);