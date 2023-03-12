import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { getLoginPassword } from './index';

describe('getloginUsername', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123'
      }
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });
});

describe('getloginUsername', () => {
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
