import { useNavigate } from 'react-router-dom';
import Card from './Card';
import { convertLeafType } from '../constants';
import { archiveContentStyle, lineStyle } from '../archive.css';
import type { DiaryListProps } from '@/types/archive';

const DiaryList = ({
  diaries,
  hasNextPage,
  isFetchingNextPage,
  observerRef,
}: DiaryListProps) => {
  const navigate = useNavigate();

  if (diaries.length === 0) {
    return (
      <div className={archiveContentStyle}>아직 작성된 설화가 없어요.</div>
    );
  }

  return (
    <div className={archiveContentStyle}>
      {diaries.map((diary, index) => (
        <div key={diary.diaryId}>
          <div
            onClick={() => navigate(`/results/${diary.diaryId}`)}
            style={{ cursor: 'pointer' }}
          >
            <Card
              label={convertLeafType(diary.leafType)}
              title={diary.title}
              createdAt={new Date(diary.createdAt)}
            />
          </div>
          {index < diaries.length - 1 && <div className={lineStyle}></div>}
        </div>
      ))}
      {hasNextPage && (
        <div ref={observerRef} style={{ minHeight: '20px', padding: '10px' }}>
          {isFetchingNextPage && <div>더 불러오는 중...</div>}
        </div>
      )}
    </div>
  );
};

export default DiaryList;
