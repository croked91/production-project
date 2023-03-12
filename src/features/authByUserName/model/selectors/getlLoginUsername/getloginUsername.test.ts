import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { getLoginUsername } from './index';

describe('getloginUsername', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin'
      }
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });
});

describe('getloginUsername', () => {
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
