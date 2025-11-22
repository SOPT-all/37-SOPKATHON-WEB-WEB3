import { useState } from 'react';
import TitleInput from './components/TitleInput';

const PostPage = () => {
  const [title, setTitle] = useState('');

  return (
    <div>
      <TitleInput
        value={title}
        onChange={setTitle}
        placeholder="제목을 입력하세요"
      />
    </div>
  );
};

export default PostPage;
