import { useInfiniteQuery } from '@tanstack/react-query';
import type { FilterType } from '../../../pages/archive/constants';
import { leafTypeMap } from '../../../pages/archive/constants';
import { getDiaries } from '@/apis/archive.api';
import type { DiariesResponse } from '@/types/archive';

export const useDiariesInfiniteQuery = (selectedFilter: FilterType) => {
  const leafType =
    selectedFilter === 'all' ? undefined : leafTypeMap[selectedFilter];

  return useInfiniteQuery({
    queryKey: ['diaries', selectedFilter],
    queryFn: ({ pageParam }: { pageParam: number | undefined }) =>
      getDiaries({ cursor: pageParam, size: 10, leafType }),
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage: DiariesResponse) => {
      if (!lastPage.hasNext || !lastPage.nextCursor) {
        return undefined;
      }
      return lastPage.nextCursor;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: true,
  });
};
