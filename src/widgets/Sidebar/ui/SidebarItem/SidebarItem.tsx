import { memo } from 'react';
import { useTranslation } from 'react-i18next';
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
