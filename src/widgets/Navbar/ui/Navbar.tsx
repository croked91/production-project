import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './styles.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(styles.navBar, {}, [className])}>
			<div className={styles.links}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to='/'
					className={styles.mainLink}
				>
					{t('Main')}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
					{t('About')}
				</AppLink>
			</div>
		</div>
	);
};