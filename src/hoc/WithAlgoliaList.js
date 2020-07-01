import {connect} from 'react-redux';
import {Fetch_Async_Data, Filter_By_Date} from '../Actions';

mapDispatchToProps = dispatch => ({
  //   GetFreqDataDispatch: (index, end) => dispatch(Get_Freq_Data_data(index, end)),

  GetDataAPIDispatch: () => dispatch(Fetch_Async_Data()),

  GetFilterDate: sortby => dispatch(Filter_By_Date()),
});

mapStateToProps = state => {
  return {
    List: state.LIST,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
