import type { InputProps } from '@/types/input';
import { inputStyle } from './input.css';

const Input = ({
  onChange,
  placeholder,
  type = 'text',
  className,
}: InputProps) => {
  return (
    <input
      className={className ? `${inputStyle} ${className}` : inputStyle}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
