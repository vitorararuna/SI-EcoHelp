import { all } from 'redux-saga/effects';

import auth from '../Auth/auth.saga';
import user from '../User/user.saga';

export default function* rootSaga() {
  return yield all([auth, user]);
}