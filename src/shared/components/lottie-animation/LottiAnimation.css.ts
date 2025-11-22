// LottiAnimation.css.ts 파일 내용 확인
import { style, createVar } from '@vanilla-extract/css';

export const lottieWidth = createVar(); // createVar로 변수 정의
export const lottieHeight = createVar();

export const container = style({
  width: lottieWidth, // CSS 변수 사용
  height: lottieHeight, // CSS 변수 사용
});
