import * as styles from './MainPage.css';
import TextLogo from '@/shared/assets/components/TextLogo';
import Button from '@/shared/components/button/Button';

const MainPage = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <TextLogo className={styles.textLogo} />
          <span className={styles.description}>
            일상의 한줄이, 아일랜드 설화가 되는 순간
          </span>
        </div>
        <div className={styles.buttonContainer}>
          <Button variant='outline' type='button'>
            세잎에 새로운 기억 더하기
          </Button>
          <Button variant='filled' type='button'>
            세잎 모아보기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
