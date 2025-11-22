import { content } from './ResultContent.css';
import type { TabMenu } from '../ResultPage';
import GlobalLoadingScreen from '@/shared/components/global-loading-screen/global-loading-screen';

interface ResultContentProps {
  click: TabMenu;
  originContent: string;
  sagaContent: string;
  isLoading: boolean;
}

const ResultContent = ({
  click,
  originContent,
  sagaContent,
  isLoading,
}: ResultContentProps) => {
  if (click === 'tale' && isLoading) {
    return <GlobalLoadingScreen />;
  }
  return (
    <div className={content}>
      {click === 'origin' ? originContent : sagaContent}
    </div>
  );
};

export default ResultContent;
