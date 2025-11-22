import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router/constant/routes';
import TitleInput from './components/TitleInput';
import ContentInput from './components/ContentInput';
import Button from '@/shared/components/button/Button';
import Chip from '@/shared/components/chip/Chip';
import * as styles from './PostPage.css';

// theme 매핑 함수
const chipToTheme = (chip: 'faith' | 'hope' | 'love' | null): string => {
  const themeMap = {
    faith: 'FAITH',
    hope: 'HOPE',
    love: 'LOVE',
  };
  return chip ? themeMap[chip] : 'FAITH';
};

const PostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedChip, setSelectedChip] = useState<'faith' | 'hope' | 'love' | null>(null);
  const navigate = useNavigate();

  const isFormValid = title.trim().length > 0 && content.trim().length > 0;

  const handleSubmit = () => {
    const postData = {
      title: title.trim(),
      createdAt: new Date().toISOString(),
      theme: chipToTheme(selectedChip),
      content: content.trim(),
    };
    console.log('전달할 데이터:', postData);
    navigate(ROUTES.RESULTS, { state: postData });
  };

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
        onClick={handleSubmit}
      >
        아일랜드 설화로 만들기
      </Button>
    </div>
  );
};

export default PostPage;
