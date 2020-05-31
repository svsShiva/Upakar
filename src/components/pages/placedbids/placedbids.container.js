import { connect } from 'react-redux';

import PlacedBids from './placedbids.component';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacedBids);