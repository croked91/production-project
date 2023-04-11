import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SideBarItemType } from '../../model/item';
import styles from './SidebarItem.module.scss';

interface SideBarItemProps {
  item: SideBarItemType;
  collapsed: boolean
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
  const { t } = useTranslation('sidebar');
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(styles.item, { [styles.collapsed]: collapsed }, [])}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{t(item.i18nKey)}</span>
    </AppLink>
  );
});
