import { useEffect, useState } from "react";
export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebauncedValue] = useState<T>(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebauncedValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
