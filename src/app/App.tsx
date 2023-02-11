import { useTheme } from "app/providers/ThemeProvider";
import { Suspense } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/RouteProvider";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
