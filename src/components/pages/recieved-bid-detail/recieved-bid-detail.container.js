import { connect } from 'react-redux';

import RecievedbidsDetails from './recieved-bid-detail.component';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecievedbidsDetails);