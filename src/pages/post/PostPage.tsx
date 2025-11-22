import { useState } from 'react';
import TitleInput from './components/TitleInput';
import ContentInput from './components/ContentInput';
import Button from '@/shared/components/button/Button';
import { submitButton } from './PostPage.css';

const PostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const isFormValid = title.trim().length > 0 && content.trim().length > 0;

  return (
    <div>
      <TitleInput
        value={title}
        onChange={setTitle}
        placeholder="제목을 입력하세요"
      />
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
        className={submitButton}
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
