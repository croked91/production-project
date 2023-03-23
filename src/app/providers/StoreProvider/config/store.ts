import {
  configureStore, ReducersMapObject
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User/model/slice/userSclice';
import { NavigateOptions, To } from 'react-router-dom';
import { CombinedState, Reducer } from 'redux';
import { $api } from 'shared/api/api';
import { ThunkExtraArg } from '..';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './stateSchema';

export function createReduxStore(
  initailState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate
  };

  // eslint-disable-next-line max-len
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initailState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    })
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
