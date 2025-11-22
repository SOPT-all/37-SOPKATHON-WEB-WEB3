import Label from '@/shared/components/label/Label';
import { cardCreatedAtStyle, cardStyle, cardTitleStyle } from './card.css';
import { formatDateTime } from '@/shared/utils/formatDate';

interface CardProps {
  label: 'faith' | 'hope' | 'love';
  title: string;
  createdAt: Date;
}

const Card = ({ label, title, createdAt }: CardProps) => {
  const labelName = {
    faith: '용기',
    hope: '희망',
    love: '사랑',
  };

  return (
    <div className={cardStyle}>
      <div>
        <Label styleType={label}>{labelName[label]}</Label>
      </div>
      <div>
        <h3 className={cardTitleStyle}>{title}</h3>
      </div>
      <div>
        <p className={cardCreatedAtStyle}>{formatDateTime(createdAt)}</p>
      </div>
    </div>
  );
};

export default Card;
