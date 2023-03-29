import { useRef, useEffect } from "react";

export const useObserverLoader = (elementInView, actionInSight) => {
  const observerLoader = useRef();

  useEffect(() => {
    if (observerLoader.current) {
      observerLoader.current.disconnect();
    }

    observerLoader.current = new IntersectionObserver(actionInSight);
    if (elementInView.current) {
      observerLoader.current.observe(elementInView.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementInView]);
};
