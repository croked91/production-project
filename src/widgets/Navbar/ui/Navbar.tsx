import { getUserAuthData, userLogout } from 'entities/User';
import { LoginModal } from 'features/authByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './styles.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }:NavbarProps) => {
  const { t } = useTranslation('navbar');
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userLogout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.navBar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={styles.links}
          onClick={onLogout}
        >
          {t('Log out')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navBar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={onShowModal}
      >
        {t('Log in')}
      </Button>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </div>
  );
});
