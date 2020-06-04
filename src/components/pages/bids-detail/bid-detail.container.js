import { connect } from 'react-redux';

import BidsDetails from './bid-detail.component';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BidsDetails);