import { useState } from 'react';
import { container, textarea, counter } from './ContentInput.css';

interface ContentInputProps {
  value: string;
  onChange: (_value: string) => void;
  placeholder: string;
  maxLength: number;
}

const ContentInput = ({
  value,
  onChange,
  placeholder,
  maxLength,
}: ContentInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const textareaClass =
    isFocused && hasValue ? textarea.active : textarea.default;
  const counterClass = isFocused ? counter.active : counter.default;

  return (
    <div className={container}>
      <textarea
        className={textareaClass}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        maxLength={maxLength}
      />
      <div className={counterClass}>
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export default ContentInput;