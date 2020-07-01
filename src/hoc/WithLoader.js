import {connect} from 'react-redux';
import {TurnOnLoader} from '../Actions';

mapDispatchToProps = dispatch => ({
  TurnOnLoaderDispatch: payload => TurnOnLoader(payload),
});

mapStateToProps = data => {
  return {
    loader: data.LOADER,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
