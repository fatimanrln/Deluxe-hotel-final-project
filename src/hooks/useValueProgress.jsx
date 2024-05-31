import { useEffect, useState } from "react";

const CHANGES_COUNT = 50;

const useValueProgress = (toValue, { start = false }) => {
  const fromValue = Math.ceil(toValue / 2);
  const step = Math.ceil(toValue / CHANGES_COUNT);
  const [value, setValue] = useState(fromValue);

  useEffect(() => {
    if (start) {
      const intervalId = setInterval(() => {
        setValue((prevValue) => {
          const newValue = prevValue + step;

          if (prevValue === toValue) {
            clearInterval(intervalId);
          }

          return newValue < toValue ? newValue : toValue;
        });
      }, 10);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [fromValue, toValue, step, start]);

  return start ? value : toValue;
};

export default useValueProgress;
