import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User/model/slice/userSclice';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './stateSchema';

export function createReduxStore(
  initailState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initailState
  });

  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
