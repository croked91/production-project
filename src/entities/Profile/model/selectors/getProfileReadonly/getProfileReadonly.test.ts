import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('should return isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      }
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });
});

describe('getProfileReadonly', () => {
  test('should return isLoading false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false
      }
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(false);
  });
});

describe('getProfileReadonly', () => {
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
