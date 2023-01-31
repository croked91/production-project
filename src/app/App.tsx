import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import { AboutPage, MainPage } from "pages";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toogle</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
