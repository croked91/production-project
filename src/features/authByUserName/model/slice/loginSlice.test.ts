import { ILoginSchema } from '../types/LoginSchema';
import { loginReducer, setPassword, setUsername } from './loginSlice';

describe('loginSlice', () => {
  test('set username', () => {
    const state: DeepPartial<ILoginSchema> = {
      username: 'admin'
    };
    expect(loginReducer(state as ILoginSchema, setUsername('1231231'))).toEqual({ username: '1231231' });
  });
});

describe('loginSlice', () => {
  test('set password', () => {
    const state: DeepPartial<ILoginSchema> = {
      password: '123'
    };
    expect(loginReducer(state as ILoginSchema, setPassword('1231231'))).toEqual({ password: '1231231' });
  });
});
