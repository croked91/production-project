import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './stateSchema';

export function createReduxStore(initailState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {
			defaultObj: {}
		},
		devTools: __IS_DEV__,
		preloadedState: initailState
	});
}
