import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import styles from './styles.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const { t } = useTranslation();
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

				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
					className={styles.item}
				>
					<MainIcon className={styles.icon} />
					<span className={styles.link}>{t('Main')}</span>
				</AppLink>

				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}
					className={styles.item}
				>
					<AboutIcon className={styles.icon} />
					<span className={styles.link}>{t('About')}</span>
				</AppLink>

			</div>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={isCollapsed} />
			</div>
		</div>
	);
};
