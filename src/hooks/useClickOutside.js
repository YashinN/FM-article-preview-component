import { useEffect } from "react";

const useClickOutside = (handler, ref, buttonRef, dependancies) => {
  useEffect(() => {
    const onClickOutside = (e) => {
      if (buttonRef.current.contains(e.target)) return;

      if (ref.current && !ref.current.contains(e.target)) {
        handler(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [dependancies]);
};

export default useClickOutside;
