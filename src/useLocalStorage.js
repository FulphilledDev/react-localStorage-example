import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {

    // local storage uses a build in property of windo (window.localStorage)
        // window object is NOT available on server side, therefore ONLY client side/browser ==> Error (when using Next.js)
            // FIX: Make check whether 'window' object is defined
                // What this does: Only run on environment where window object is available
    if (typeof window !== "undefined") {
        // getting stored item
        const saved = localStorage.getItem(key);
        const initial = saved !== null ? JSON.parse(saved) : defaultValue;
        return initial;
    }
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};