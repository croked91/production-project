import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/helpers/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
  first: 'Егор',
  lastname: 'Тихомиров',
  age: 22,
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Уфа',
  username: 'admin'
};

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
