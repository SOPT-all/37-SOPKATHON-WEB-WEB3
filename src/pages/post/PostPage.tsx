import { useState } from 'react';
import TitleInput from './components/TitleInput';
import ContentInput from './components/ContentInput';
import Button from '@/shared/components/button/Button';
import Chip from '@/shared/components/chip/Chip';
import * as styles from './PostPage.css';

const PostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedChip, setSelectedChip] = useState<'faith' | 'hope' | 'love' | null>(null);

  const isFormValid = title.trim().length > 0 && content.trim().length > 0;

  return (
    <div className={styles.container}>
      <TitleInput
        value={title}
        onChange={setTitle}
        placeholder="제목을 입력하세요"
      />
      <div className={styles.chipSection}>
        <h2 className={styles.title}>오늘의 마음을 담을 잎사귀를 고르세요</h2>
        <div className={styles.chipContainer}>
          <Chip
            variant="faith"
            type="button"
            chipStatus={selectedChip === 'faith' ? 'active' : 'inactive'}
            onClick={() => setSelectedChip(selectedChip === 'faith' ? null : 'faith')}
          />
          <Chip
            variant="hope"
            type="button"
            chipStatus={selectedChip === 'hope' ? 'active' : 'inactive'}
            onClick={() => setSelectedChip(selectedChip === 'hope' ? null : 'hope')}
          />
          <Chip
            variant="love"
            type="button"
            chipStatus={selectedChip === 'love' ? 'active' : 'inactive'}
            onClick={() => setSelectedChip(selectedChip === 'love' ? null : 'love')}
          />
        </div>
      </div>

      <ContentInput 
        value={content}
        onChange={setContent}
        placeholder='오늘 가장 따뜻했던 순간을 적어주세요!'
        maxLength={100}
      />
      <Button
        variant="filled"
        type="button"
        disabled={!isFormValid}
        className={styles.submitButton}
        onClick={() => {
          // TODO: 게시글 저장 로직
        }}
      >
        아일랜드 설화로 만들기
      </Button>
    </div>
  );
};

export default PostPage;
