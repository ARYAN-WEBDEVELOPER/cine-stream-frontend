import { useEffect, useRef } from "react";

const useInfiniteScroll = (
  callback,
  loading
) => {
  const observerRef = useRef(null);

  const lastElementRef = useRef(null);

  useEffect(() => {
    if (loading) return;

    observerRef.current =
      new IntersectionObserver(
        (entries) => {
          if (
            entries[0].isIntersecting
          ) {
            callback();
          }
        },
        {
          threshold: 1,
        }
      );

    const currentElement =
      lastElementRef.current;

    if (currentElement) {
      observerRef.current.observe(
        currentElement
      );
    }

    return () => {
      if (
        observerRef.current &&
        currentElement
      ) {
        observerRef.current.unobserve(
          currentElement
        );
      }
    };
  }, [callback, loading]);

  return lastElementRef;
};

export default useInfiniteScroll;