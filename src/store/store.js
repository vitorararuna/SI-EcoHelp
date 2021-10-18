import { createStore, combineReducers } from 'redux';
import { persistStore } from 'redux-persist';
import userReducer from './user/user.reducer';
import persist from './persist';

const rootReducer = combineReducers({
    user: userReducer
})

export const store = createStore(persist(rootReducer))
export const persistor = persistStore(store);
