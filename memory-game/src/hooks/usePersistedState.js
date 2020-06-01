import { useState, useEffect } from 'react';

const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    try {
      const init = localStorage.getItem(key);
      if (init === null || !init) {
        return defaultValue;
      }
      try {
        return JSON.parse(init);
      } catch (_) {
        return defaultValue;
      }
    } catch (_) {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
