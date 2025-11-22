import { useNavigate } from 'react-router-dom';
import * as styles from './MainPage.css';
import TextLogo from '@/shared/assets/components/TextLogo';
import Button from '@/shared/components/button/Button';
import { CloverNoise } from '@/shared/assets/components';
import { ROUTES } from '@/router/constant/routes';
import { useGetCloverCount } from '@/shared/hooks/queries/useCloverCount';

const MainPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useGetCloverCount();

  const faithCount = data?.faithCount ?? 0;
  const hopeCount = data?.hopeCount ?? 0;
  const loveCount = data?.loveCount ?? 0;

  const displayFaith = isLoading ? '...' : isError ? '-' : faithCount;
  const displayHope = isLoading ? '...' : isError ? '-' : hopeCount;
  const displayLove = isLoading ? '...' : isError ? '-' : loveCount;

  if (isError) {
    console.error('설화 카운트 로딩 에러:', error.message);
  }

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.cloverContainer}>
        <CloverNoise className={styles.clover} />
        <div className={styles.cloverTextTop}>
          <span className={styles.cloverLabel}>용기</span>
          <span className={styles.cloverNumber}>{displayFaith}</span>
        </div>

        <div className={styles.cloverTextLeft}>
          <span className={styles.cloverLabel}>소망</span>
          <span className={styles.cloverNumber}>{displayHope}</span>
        </div>

        <div className={styles.cloverTextRight}>
          <span className={styles.cloverLabel}>사랑</span>
          <span className={styles.cloverNumber}>{displayLove}</span>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <TextLogo className={styles.textLogo} />
          <span className={styles.description}>
            일상의 한줄이, 아일랜드 설화가 되는 순간
          </span>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            variant='outline'
            type='button'
            onClick={() => navigate(ROUTES.POST)}
          >
            세잎에 새로운 기억 더하기
          </Button>
          <Button
            variant='filled'
            type='button'
            onClick={() => navigate(ROUTES.ARCHIVE)}
          >
            세잎 모아보기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
