import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsError } from './index';

describe('getloginUsername', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error'
      }
    };
    expect(getLoginIsError(state as StateSchema)).toEqual('error');
  });
});

describe('getloginUsername', () => {
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsError(state as StateSchema)).toEqual(undefined);
  });
});
