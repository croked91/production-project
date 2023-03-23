import { setAuthData } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/helpers/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsermname } from './index';

describe('loginByUsername', () => {
  test('success login', async () => {
    const userValue = { username: 'admin', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsermname);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(setAuthData(userValue));
    expect(thunk.api.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('login with error ', async () => {
    const thunk = new TestAsyncThunk(loginByUsermname);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
