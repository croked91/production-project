import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsloading';

describe('getProfileIsloading', () => {
  test('should return isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });
});

describe('getProfileIsloading', () => {
  test('should return isLoading false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false
      }
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });
});

describe('getProfileIsloading', () => {
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
