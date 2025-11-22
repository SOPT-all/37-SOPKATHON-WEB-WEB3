// src/shared/components/GlobalLoadingScreen.tsx

import LottieAnimation from '@/shared/components/lottie-animation/LottieAnimation.tsx';
import * as styles from './global-loading-screen.css';

const GlobalLoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <LottieAnimation width={104} height={94} />
      <p className={styles.loadingText}>설화를 만드는 중이에요</p>
    </div>
  );
};

export default GlobalLoadingScreen;
