import { useState } from 'react';
import { container, title, input } from './TItleInput.css';

interface TitleInputPorps {
  value: string;
  onChange: (_value: string) => void;
  placeholder: string;
}

const Input = ({ value, onChange, placeholder }: TitleInputPorps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const inputClass = isFocused && hasValue ? input.active : input.default;

  return (
    <div className={container}>
      <h2 className={title}>오늘 설화의 제목을 지어주세요</h2>
      <input
        className={inputClass}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Input;
