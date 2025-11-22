import { useNavigate } from 'react-router-dom';
import * as styles from './MainPage.css';
import TextLogo from '@/shared/assets/components/TextLogo';
import Button from '@/shared/components/button/Button';
import UnionLeft from '@/shared/assets/components/UnionLeft';
import UnionRight from '@/shared/assets/components/UnionRight';
import UnionTop from '@/shared/assets/components/UnionTop';
import UnionBottom from '@/shared/assets/components/UnionBottom';
import { ROUTES } from '@/router/constant/routes';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.backgroundContainer}>
      <UnionLeft className={styles.unionLeft} />
      <UnionRight className={styles.unionRight} />
      <UnionTop className={styles.unionTop} />
      <UnionBottom className={styles.unionBottom} />
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
