import { useState } from 'react';
import * as s from './ResultPage.css';
import Tab from './components/Tab';
import ResultTitle from './components/ResultTitle';
import ResultContent from './components/ResultContent';
import { useParams, useLocation } from 'react-router-dom';
import api from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';
import type { Label, ResultItem, PostReq } from '@/types/result';
import { formatDateTime } from '../../shared/utils/formatDate';

export type TabMenu = 'origin' | 'tale';

const LABEL: Record<Label, string> = {
  FAITH: '용기',
  HOPE: '소망',
  LOVE: '사랑',
};

const ResultPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const state = location.state as PostReq | null;

  const [click, setClick] = useState<TabMenu>('origin');

  const isViewMode = id !== undefined;

  // get 요청
  const { data: viewData, isLoading: isViewLoading } = useQuery<ResultItem>({
    queryKey: ['result', id],
    queryFn: async () => {
      const res = await api.get(`/diaries/${id}`);
      return res.data;
    },
    enabled: isViewMode,
    staleTime: Infinity,
  });

  // post 요청
  const { data: createdStory, isLoading: isCreateLoading } = useQuery<string>({
    queryKey: ['result', state?.createdAt],
    queryFn: async () => {
      if (!state) throw new Error('No State Data');
      const res = await api.post('/diary', state);
      return res.data.story;
    },
    enabled: !isViewMode && !!state,
    staleTime: Infinity,
  });

  // 로딩 처리
  if (isViewMode && isViewLoading) return <div>Loading Result...</div>;

  // 1. 타이틀 섹션 데이터
  const labelKey = isViewMode ? viewData?.leafType : state?.theme;
  const displayLabel = labelKey ? LABEL[labelKey] : '';

  const displayTitle = isViewMode ? viewData?.title : state?.title;
  const displayDate = isViewMode ? viewData?.createdAt : state?.createdAt;

  // 2. 컨텐츠 섹션 데이터
  // 조회 모드면 API 결과의 originalContent, 생성 모드면 state의 content
  const originalContent = isViewMode
    ? viewData?.originalContent
    : state?.content;

  // 조회 모드면 API 결과의 sagaContent, 생성 모드면 POST API 결과인 createdStory
  const sagaContent = isViewMode ? viewData?.sagaContent : createdStory;

  if (!isViewMode && !state) {
    return <div>잘못된 접근</div>;
  }

  const isGenerating = !isViewMode && isCreateLoading;

  return (
    <div>
      <Tab click={click} setClick={setClick} />
      <section className={s.section}>
        <ResultTitle
          label={displayLabel}
          title={displayTitle || ''}
          date={formatDateTime(displayDate) || ''}
        ></ResultTitle>
        <div className={s.line} />
        <ResultContent
          click={click}
          originContent={originalContent || ''}
          sagaContent={sagaContent || ''}
          isLoading={isGenerating}
        />
      </section>
    </div>
  );
};

export default ResultPage;
