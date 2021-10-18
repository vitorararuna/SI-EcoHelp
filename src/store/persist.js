import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'ecoHelp',
      storage: AsyncStorage,
      whitelist: ['user'],
    },
    reducers
  );

  return persistedReducer;
};