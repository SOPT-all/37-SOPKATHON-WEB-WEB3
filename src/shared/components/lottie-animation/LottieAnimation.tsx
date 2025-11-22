// src/shared/components/LottieAnimation.tsx

import Lottie from 'lottie-react';
import animationData from '@/shared/assets/lottie/loading.json';
import { assignVars } from '@vanilla-extract/css';
import { container, lottieWidth, lottieHeight } from './LottiAnimation.css.ts';

interface LottieProps {
  width?: number | string;
  height?: number | string;
}

const LottieAnimation = ({ width = 300, height = 300 }: LottieProps) => {
  // width와 height 값이 number일 경우 'px'을 붙여줍니다.
  const finalWidth = typeof width === 'number' ? `${width}px` : width;
  const finalHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={container}
      style={assignVars(
        { lottieWidth, lottieHeight }, // 첫 번째 인자: 변수 객체
        { lottieWidth: finalWidth, lottieHeight: finalHeight } // 두 번째 인자: 값 객체
      )}
    >
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default LottieAnimation;
