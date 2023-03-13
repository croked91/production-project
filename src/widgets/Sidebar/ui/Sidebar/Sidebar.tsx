import { memo, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { SidebarItemsList } from '../../model/item';
import { SideBarItem } from '../SidebarItem/SidebarItem';
import styles from './styles.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }:SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const onToggle = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(
        styles.sidebar,
        { [styles.collapsed]: isCollapsed },
        [className]
      )}
    >
      <Button
        data-testid='sidebar-toogle'
        onClick={onToggle}
        className={styles.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.XL}
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        {SidebarItemsList.map(item => (
          <SideBarItem
            key={item.path}
            item={item}
            collapsed={isCollapsed}
          />
        ))}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} />
      </div>
    </div>
  );
});
