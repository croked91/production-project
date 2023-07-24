import { CountryT } from 'entities/Country';
import { CurrencyT } from 'entities/Currency';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  ProfileCard,
  profileReducer,
  validateProfileError
} from 'entities/Profile';
import { updateProfile } from 'entities/Profile/model/slice/profileSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/helpers/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from 'shared/ui/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

const reducersList: ReducersList = {
  profile: profileReducer
};

const ProfilePage = memo(({ className }:ProfilePageProps) => {
  const { t } = useTranslation('profile-page');
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { id } = useParams<{ id: string }>();

  const valdateErrorsTranslations = {
    [validateProfileError.INCORRECT_AGE]: t('nepravilno-ukazan-vozrast'),
    [validateProfileError.INCORRECT_AVATAR]: t('nepravilno-ukazan-avatar'),
    [validateProfileError.INCORRECT_CITY]: t('nepravilno-ukazan-gorod'),
    [validateProfileError.INCORRECT_COUNTRY]: t('nepravilno-ukazana-strana'),
    [validateProfileError.INCORRECT_CURRENCY]: t('nepravilno-ukazana-valyuta'),
    [validateProfileError.INCORRECT_USERNAME]: t('nepravilno-ukazan-username'),
    [validateProfileError.INCORRECT_USER_DATA]: t('nepravilny-imya-ili-familiya'),
    [validateProfileError.NO_DATA]: t('net-dannykh'),
    [validateProfileError.SERVER_ERROR]: t('oshibka-polucheniya-dannykh-s-servera')
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(updateProfile({ first: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    if (!Number.isNaN(value)) {
      return;
    }
    dispatch(updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency?: CurrencyT) => {
    dispatch(updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country?: CountryT) => {
    dispatch(updateProfile({ country }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length
          && validateErrors.map(
            error => (
              <Text
                key={error}
                theme={TextTheme.ERROR}
                text={valdateErrorsTranslations[error]}
              />
            )
          )}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
          readOnly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
