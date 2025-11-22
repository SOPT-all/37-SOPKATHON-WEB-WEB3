import Label from '@/shared/components/label/Label';
import * as s from './ResultTitle.css';

const ResultTitle = () => {
  return (
    <div className={s.wrapper}>
      <Label styleType='faith'>용기</Label>
      <h1 className={s.title}>오늘경아와밤샌날</h1>
      <span className={s.date}>2025.11.22 22:43</span>
    </div>
  );
};

export default ResultTitle;
