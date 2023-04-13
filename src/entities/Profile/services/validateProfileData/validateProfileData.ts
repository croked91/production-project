import { IProfile, ValidateProfileErrorT, validateProfileError } from 'entities/Profile/model/types/profile';

export const validateProfileData = (profile?: IProfile): ValidateProfileErrorT[] => {
  if (!profile) {
    return [validateProfileError.NO_DATA];
  }

  const {
    first, lastname, age, currency, city, country, username, avatar
  } = profile;

  const errors: ValidateProfileErrorT[] = [];

  if (!first || !lastname) {
    errors.push(validateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(validateProfileError.INCORRECT_AGE);
  }

  if (!currency) {
    errors.push(validateProfileError.INCORRECT_CURRENCY);
  }

  if (!currency) {
    errors.push(validateProfileError.INCORRECT_COUNTRY);
  }

  if (!city || city.length < 2) {
    errors.push(validateProfileError.INCORRECT_CITY);
  }

  if (!country || country.length < 2) {
    errors.push(validateProfileError.INCORRECT_COUNTRY);
  }

  if (!username) {
    errors.push(validateProfileError.INCORRECT_USERNAME);
  }

  if (!avatar) {
    errors.push(validateProfileError.INCORRECT_AVATAR);
  }

  return errors;
};
