/* eslint-disable i18next/no-literal-string */
import { useTheme } from 'app/providers/ThemeProvider';
import { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Modal } from 'shared/ui/Modal';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/RouteProvider';

export const App = () => {
	const { theme } = useTheme();

	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=''>
				<Navbar />
				<button type='button' onClick={() => setIsOpen(true)}>toggle</button>
				<div className='content-page'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
