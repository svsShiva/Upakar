import { connect } from 'react-redux';

import PlacedbidsDetails from './placed-bid-detail.component';
import {showHideEndHelp} from './placed-bid-detail.actions';

const mapStateToProps = (state, ownProps) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    showHideEndHelp: ()=>dispatch(showHideEndHelp())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacedbidsDetails);