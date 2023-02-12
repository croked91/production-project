import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './styles.module.scss';

interface NavbarProps {
	className?: string;
}

export const NavBar: FC<NavbarProps> = ({ className }) => (
	<div className={classNames(styles.navBar, {}, [className])}>
		<div className={styles.links}>
			<AppLink
				theme={AppLinkTheme.SECONDARY}
				to='/'
				className={styles.mainLink}
			>
				Main
			</AppLink>
			<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
				About
			</AppLink>
		</div>
	</div>
);
