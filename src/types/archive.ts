import type { FilterType } from '@/pages/archive/constants';

export interface FilterChipsProps {
  selectedFilter: FilterType;
  onFilterClick: (_filter: FilterType) => void;
}

export interface DiaryListProps {
  diaries: Diary[];
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  observerRef: (_node: HTMLDivElement | null) => void;
}

export interface CardProps {
  label: 'faith' | 'hope' | 'love';
  title: string;
  createdAt: Date;
}

export interface Diary {
  diaryId: number;
  leafType: 'FAITH' | 'HOPE' | 'LOVE';
  title: string;
  createdAt: string;
}

export interface DiariesResponse {
  diaries: Diary[];
  nextCursor: number | null;
  hasNext: boolean;
}

export interface GetDiariesParams {
  cursor?: number;
  size?: number;
  leafType?: 'FAITH' | 'HOPE' | 'LOVE';
}
