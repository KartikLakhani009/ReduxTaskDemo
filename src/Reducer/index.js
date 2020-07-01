import AlgoliaStore from './algoliaStore';
import LoaderStore from './LoaderStore';
import {combineReducers} from 'redux';

export default combineReducers({
  LIST: AlgoliaStore,
  LOADER: LoaderStore,
});
