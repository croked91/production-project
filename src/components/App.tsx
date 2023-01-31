import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "../helpers/classNames/classNames";
import { AboutLazy } from "../pages/About/AboutAsync";
import { MainLazy } from "../pages/Main/MainAsync";
import "../styles/index.scss";
import { useTheme } from "../theme/useTheme";
import { Counter } from "./Counter";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toogle</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Link to="/counter">Counter</Link>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/about" element={<AboutLazy />} />
          <Route path="/" element={<MainLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
