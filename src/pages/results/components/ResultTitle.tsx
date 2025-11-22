import Label from '@/shared/components/label/Label';
import * as s from './ResultTitle.css';

interface ResultTitleProps {
  label: string;
  title: string;
  date: string;
}

const ResultTitle = ({ label, title, date }: ResultTitleProps) => {
  return (
    <div className={s.wrapper}>
      <Label styleType='faith'>{label}</Label>
      <h1 className={s.title}>{title}</h1>
      <span className={s.date}>{date}</span>
    </div>
  );
};

export default ResultTitle;
