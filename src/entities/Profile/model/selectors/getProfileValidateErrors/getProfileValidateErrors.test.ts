import { StateSchema } from 'app/providers/StoreProvider';
import { validateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
  test('should return profile validate errors', () => {
    const validateError = [
      validateProfileError.INCORRECT_AGE,
      validateProfileError.INCORRECT_CITY
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError
      }
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateError);
  });
});

describe('getProfileValidateErrors', () => {
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
