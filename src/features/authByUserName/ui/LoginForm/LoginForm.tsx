import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsermname } from '../../model/services/loginByUsername';
import { setPassword, setUsername } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsermname({ username, password }));
  }, [dispatch, username, password]);
  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Text title='Форма авторизации' />
      {error && <Text theme={TextTheme.ERROR} text={t('Вы ввели неправильный пароль или логин')} />}
      <Input
        autofocus
        onChange={onChangeUsername}
        placeholder='Введите логин'
        value={username}
      />
      <Input
        onChange={onChangePassword}
        placeholder='Введите пароль'
        value={password}
      />
      <Button
        disabled={isLoading}
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={styles.button}
      >
        {t('LogIn')}
      </Button>
    </div>
  );
});
