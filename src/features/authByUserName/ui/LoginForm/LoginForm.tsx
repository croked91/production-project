import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm:FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Input autofocus placeholder={t('inputLogin')} value='' />
      <Input placeholder={t('inputPassword')} value='' />
      <Button theme={ButtonTheme.OUTLINE} className={styles.button}>{t('LogIn')}</Button>
    </div>
  );
};
