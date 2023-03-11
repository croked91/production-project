import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation('lang-switcher');

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
      className={classNames(styles.button, {}, [className])}
    >
      {t(short ? 'short lang' : 'full lang')}
    </Button>
  );
};
