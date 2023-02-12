import { AboutPage, MainPage } from 'pages';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not-found-page'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath['not-found-page'],
		element: <NotFoundPage />
	}
};
