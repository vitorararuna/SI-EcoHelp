import { combineReducers } from 'redux';

import auth from '../Auth/auth.reducer';
import user from '../User/user.reducer';

export default combineReducers({
  auth,
  user,
});