import type { ReactNode } from 'react';
import { label } from './Label.css';
import type { PartialVariants } from '@/types/variants';

type LabelProps = PartialVariants<typeof label> & {
  children: ReactNode;
};

const Label = ({ children, styleType }: LabelProps) => {
  return <div className={label({ styleType: styleType })}>{children}</div>;
};

export default Label;
