import { useState } from 'react';
import Chip from '@/shared/components/chip/Chip';
import Card from './components/Card';
import { mockDiaries } from '@/shared/mock/list';
import {
  archiveContentStyle,
  archiveHeaderCountStyle,
  archiveHeaderStyle,
  archiveHeaderTitleStyle,
  archiveStyle,
  lineStyle,
} from './archive.css';

type FilterType = 'faith' | 'hope' | 'love' | 'all';

const filterLabels = {
  faith: '용기',
  hope: '소망',
  love: '사랑',
  all: '전체',
};

const ArchivePage = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

  const filteredDiaries =
    selectedFilter === 'all'
      ? mockDiaries
      : mockDiaries.filter(diary => diary.leafType === selectedFilter);

  const filteredCount = filteredDiaries.length;
  const filterLabel = filterLabels[selectedFilter];

  const handleFilterClick = (filter: FilterType) => {
    setSelectedFilter(filter);
  };

  return (
    <div className={archiveStyle}>
      <div className={archiveHeaderStyle}>
        <Chip
          variant='all'
          type='button'
          chipStatus={selectedFilter === 'all' ? 'active' : 'inactive'}
          onClick={() => handleFilterClick('all')}
        />
        <Chip
          variant='faith'
          type='button'
          chipStatus={selectedFilter === 'faith' ? 'active' : 'inactive'}
          onClick={() => handleFilterClick('faith')}
        />
        <Chip
          variant='hope'
          type='button'
          chipStatus={selectedFilter === 'hope' ? 'active' : 'inactive'}
          onClick={() => handleFilterClick('hope')}
        />
        <Chip
          variant='love'
          type='button'
          chipStatus={selectedFilter === 'love' ? 'active' : 'inactive'}
          onClick={() => handleFilterClick('love')}
        />
      </div>
      <div className={archiveHeaderCountStyle}>
        <p className={archiveHeaderTitleStyle}>{filterLabel}</p>
        <p className={archiveHeaderTitleStyle}>{filteredCount}개의 결과</p>
      </div>
      <div className={archiveContentStyle}>
        {filteredDiaries.map((diary, index) => (
          <div key={diary.diaryId}>
            <Card
              label={diary.leafType as 'faith' | 'hope' | 'love'}
              title={diary.title}
              createdAt={diary.createdAt}
            />
            {index < filteredDiaries.length - 1 && (
              <div className={lineStyle}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchivePage;
