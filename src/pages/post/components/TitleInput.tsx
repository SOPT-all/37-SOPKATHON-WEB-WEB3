import { useState } from 'react'
import { container, title, input } from './TItleInput.css';

interface TitleInputPorps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const Input = ({ value, onChange, placeholder }: TitleInputPorps) => {
  return (
    <div className={container}>
      <h2 className={title}>오늘 설화의 제목을 지어주세요</h2>
      <input
        className={input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
