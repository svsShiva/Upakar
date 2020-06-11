import { connect } from 'react-redux';

import MyHelpDetail from './myhelps-detail.component';
import { showData } from '../recieved-bid-detail/recieved-bid-detail.actions'

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    showData: (data) => dispatch(showData(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyHelpDetail);