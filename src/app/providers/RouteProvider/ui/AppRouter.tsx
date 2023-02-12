import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';

export const AppRouter = () => (
	<Suspense fallback={<PageLoader />}>
		<Routes>
			{Object.values(routeConfig).map(({ element, path }) => (
				<Route
					key={path}
					path={path}
					element={<div className='page-wrapper'>{element}</div>}
				/>
			))}
		</Routes>
	</Suspense>
);
