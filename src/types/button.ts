import type { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  variant: 'outline' | 'filled';
  type: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}
