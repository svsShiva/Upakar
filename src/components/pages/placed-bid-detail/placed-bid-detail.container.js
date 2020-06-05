import { connect } from 'react-redux';

import PlacedbidsDetails from './placed-bid-detail.component';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacedbidsDetails);