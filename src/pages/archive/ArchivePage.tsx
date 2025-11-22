import { useState } from 'react';
import FilterChips from './components/FilterChips';
import DiaryList from './components/DiaryList';
import { useDiariesInfiniteQuery } from '../../shared/hooks/archive/useDiariesInfiniteQuery';
import { useInfiniteScroll } from '../../shared/hooks/archive/useInfiniteScroll';
import {
  archiveHeaderCountStyle,
  archiveHeaderTitleStyle,
  archiveStyle,
} from './archive.css';
import { filterLabels, type FilterType } from './constants';
import type { Diary } from '@/types/archive';
import GlobalLoadingScreen from '@/shared/components/global-loading-screen/global-loading-screen';

const ArchivePage = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useDiariesInfiniteQuery(selectedFilter);

  const observerRef = useInfiniteScroll(
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    fetchNextPage
  );

  const diaries: Diary[] = data?.pages.flatMap(page => page.diaries) ?? [];
  const totalCount = data?.pages[0]?.totalCount ?? diaries.length;

  return (
    <div className={archiveStyle}>
      <FilterChips
        selectedFilter={selectedFilter}
        onFilterClick={setSelectedFilter}
      />
      <div className={archiveHeaderCountStyle}>
        <p className={archiveHeaderTitleStyle}>
          {filterLabels[selectedFilter]}
        </p>
        <p className={archiveHeaderTitleStyle}>{totalCount}개의 결과</p>
      </div>
      {isLoading ? (
        <GlobalLoadingScreen text='로딩 중' />
      ) : (
        <DiaryList
          diaries={diaries}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          observerRef={observerRef}
        />
      )}
    </div>
  );
};

export default ArchivePage;
