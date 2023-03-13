import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject
} from '@reduxjs/toolkit';
import { IProfileSchema } from 'entities/Profile/model/types/profile';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/authByUsername';

export interface StateSchema {
  user: IUserSchema

  // async
  loginForm?: ILoginSchema
  profile?: IProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager:IReducerManager
}
