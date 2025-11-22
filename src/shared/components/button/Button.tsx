import type { ButtonProps } from '@/types/button';
import { buttonStyleOutline, buttonStyleFilled } from './button.css';

const Button = ({
  children,
  variant,
  type,
  disabled,
  onClick,
  className,
}: ButtonProps) => {
  const buttonClassName =
    variant === 'outline' ? buttonStyleOutline : buttonStyleFilled;

  return (
    <button
      className={
        className ? `${buttonClassName} ${className}` : buttonClassName
      }
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
