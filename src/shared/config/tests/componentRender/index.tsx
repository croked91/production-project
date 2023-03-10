import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18nForTest';

export interface IComponentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export const componentRender = (
  component: ReactNode,
  options: IComponentRenderOptions = {}
) => {
  const { route = '/', initialState } = options;
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};
