import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/helpers/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';
import { getLoginUsername } from '../../model/selectors/getlLoginUsername';
import { getLoginIsError } from '../../model/selectors/getLoginIsError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { loginByUsermname } from '../../model/services/loginByUsername';
import { loginReducer, setPassword, setUsername } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation('login-form');
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginIsError);
  const isLoading = useSelector(getLoginIsLoading);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsermname({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);
  return (

    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(styles.loginForm, {}, [className])}>
        <Text title={t('Auth form')} />
        {error && <Text theme={TextTheme.ERROR} text={t('incorrect login')} />}
        <Input
          autofocus
          onChange={onChangeUsername}
          placeholder={t('entry login')}
          value={username}
        />
        <Input
          onChange={onChangePassword}
          placeholder={t('enter password')}
          value={password}
        />
        <Button
          disabled={isLoading}
          onClick={onLoginClick}
          theme={ButtonTheme.OUTLINE}
          className={styles.button}
        >
          {t('login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
