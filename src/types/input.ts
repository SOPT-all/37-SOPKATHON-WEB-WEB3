import type { ChangeEvent } from 'react';

export interface InputProps {
  onChange?: (_e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  className?: string;
}
