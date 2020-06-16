import { connect } from 'react-redux';

import CustomLoader from './custom-loader.component';

const mapStateToProps = (state, ownProps) => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomLoader);
