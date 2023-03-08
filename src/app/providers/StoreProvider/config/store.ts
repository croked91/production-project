import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User/model/slice/userSclice';
import { loginReducer } from 'features/authByUsername';
import { StateSchema } from './stateSchema';

export function createReduxStore(initailState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
    loginForm: loginReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initailState
  });
}
