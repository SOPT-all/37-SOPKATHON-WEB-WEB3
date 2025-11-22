// src/shared/components/GlobalLoadingScreen.tsx

import LottieAnimation from '@/shared/components/lottie-animation/LottieAnimation.tsx';
import * as styles from './global-loading-screen.css';

const GlobalLoadingScreen = ({ text }: { text: string }) => {
  return (
    <div className={styles.loadingScreen}>
      <LottieAnimation width={104} height={94} />
      <p className={styles.loadingText}>{text}</p>
    </div>
  );
};

export default GlobalLoadingScreen;
