import { container, textarea, counter } from './ContentInput.css';

interface ContentInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  maxLength: number;
}

const ContentInput = ({
  value,
  onChange,
  placeholder,
  maxLength,
}: ContentInputProps) => {
  const hasValue = value.length > 0;
  const textareaClass = hasValue ? textarea.active : textarea.default;

  return (
    <div className={container}>
      <textarea
        className={textareaClass}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
      />
      <div className={counter}>
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export default ContentInput;