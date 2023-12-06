import { useEffect } from "react";

const useClickOutside = (handler, ref, dependancies) => {
  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", onClickOutside);

    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [...dependancies]);
};

export default useClickOutside;
