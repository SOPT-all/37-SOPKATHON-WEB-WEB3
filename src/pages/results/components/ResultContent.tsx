import { content } from './ResultContent.css';
import type { TabMenu } from '../ResultPage';

interface ResultContentProps {
  click: TabMenu;
}

const ResultContent = ({ click }: ResultContentProps) => {
  return (
    <div className={content}>
      {click === 'origin'
        ? '경아와 솝커톤하면서 밤샘;; 오늘 날씨도 참 괜찮았는데 솝커톤이 혹여나 좀 힘들진 않을까 걱정이 됨 경아 기특함 경아야 잘 자라주려무나'
        : '설화설화설화'}
    </div>
  );
};

export default ResultContent;
