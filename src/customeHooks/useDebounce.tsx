import { useEffect, useState } from "react";

export const useDebounce = (text: string, delay: number) => {
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeoutId: number = window.setTimeout(() => {
      setDebouncedText(text);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, delay]);
  return debouncedText;
};

export default useDebounce;
