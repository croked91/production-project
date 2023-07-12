import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticlesDetailsData,
  getArticlesDetailsError,
  getArticlesDetailsIsLoading
} from './articleDetails';

describe('articleDetails.test', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle'
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    };
    expect(getArticlesDetailsData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state data', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error'
      }
    };
    expect(getArticlesDetailsError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesDetailsError(state as StateSchema)).toEqual(undefined);
  });
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    };
    expect(getArticlesDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesDetailsIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
