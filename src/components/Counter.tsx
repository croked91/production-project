import { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button
        className={styles.button}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Inc
      </button>
    </div>
  );
};
