import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useInfiniteScroll = (
  hasNextPage: boolean,
  isFetchingNextPage: boolean,
  isLoading: boolean,
  fetchNextPage: () => void
) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '200px',
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, isLoading, fetchNextPage]);

  return ref;
};
