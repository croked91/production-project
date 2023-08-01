import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback(({ path, element, authOnly }: AppRouteProps) => {
    const wrappedElement = (
      <Suspense fallback={<PageLoader />}>
        {element}
      </Suspense>
    );

    return (
      <Route
        key={path}
        path={path}
        element={
          authOnly
            ? <RequireAuth>{wrappedElement}</RequireAuth>
            : wrappedElement
        }
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
});
