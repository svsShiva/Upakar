import { connect } from 'react-redux';
import CustomActivityIndicator from './custom-loader.component';

const mapStateToProps = (state) => {
  return {
    loaderEnabled: state.globalReducer.loaderEnabled
  }
}

export default connect(mapStateToProps)(CustomActivityIndicator);