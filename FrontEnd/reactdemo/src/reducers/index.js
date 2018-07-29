import { combineReducers } from 'redux';
import ProductsReducer from './reducer-products';
import AuthReducer from './reducer-auth';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  products: ProductsReducer,
  loggedIn: AuthReducer,
  form: formReducer
});

export default rootReducer;