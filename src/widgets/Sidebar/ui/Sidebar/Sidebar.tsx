import { FC, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import styles from './styles.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
	const onToggle = () => {
		setIsCollapsed(prev => !prev);
	};

	return (
		<div
			className={classNames(
				styles.sidebar,
				{ [styles.collapsed]: isCollapsed },
				[className]
			)}
		>
			<Button onClick={onToggle}>Toggle</Button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
