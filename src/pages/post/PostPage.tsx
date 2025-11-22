import { useState } from 'react';
import TitleInput from './components/TitleInput';
import ContentInput from './components/ContentInput';

const PostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
    </div>
  );
};

export default PostPage;
