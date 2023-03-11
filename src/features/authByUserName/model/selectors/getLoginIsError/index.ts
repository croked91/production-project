import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getLoginIsError = (state: StateSchema) => state?.loginForm?.error;
