import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const backgroundContainer = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundImage: 'url(/bg_main.webp)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const unionLeft = style({
  position: 'absolute',
  left: '50.6%',
  top: '31.8%',
  transform: 'translate(-50%, -50%) translateX(-7.35rem) translateY(0.7rem)',
  width: '14.7rem',
  height: '15.6rem',
  zIndex: 1,
});

export const unionRight = style({
  position: 'absolute',
  left: '49.6%',
  top: '31.8%',
  transform: 'translate(-50%, -50%) translateX(7.35rem) translateY(0.7rem)',
  width: '14.7rem',
  height: '15.6rem',
  zIndex: 1,
});

export const unionTop = style({
  position: 'absolute',
  top: '8.5rem',
  width: '15.6rem',
  height: '14.2rem',
  zIndex: 1,
});

export const unionBottom = style({
  position: 'absolute',
  left: '42%',
  top: '29%',
  transform: 'translate(-50%, -50%) translateY(7.65rem)',
  width: '7.9rem',
  height: '15.3rem',
  zIndex: 1,
});

// 클로버 텍스트 스타일
export const cloverTextTop = style({
  position: 'absolute',
  top: '12.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 300,
  pointerEvents: 'none',
  opacity: '0.6',
});

export const cloverTextLeft = style({
  position: 'absolute',
  left: '50.6%',
  top: '31.8%',
  transform: 'translate(-50%, -50%) translateX(-7.35rem) translateY(0.7rem)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 3,
  pointerEvents: 'none',
  opacity: '0.6',
});

export const cloverTextRight = style({
  position: 'absolute',
  left: '49.6%',
  top: '31.8%',
  transform: 'translate(-50%, -50%) translateX(7.35rem) translateY(0.7rem)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 3,
  pointerEvents: 'none',
  opacity: '0.6',
});

export const cloverLabel = style({
  ...themeVars.fontStyles.caption1_b_12,
  color: themeVars.color.white,
  marginBottom: '-0.4rem',
});

export const cloverNumber = style({
  ...themeVars.fontStyles.head_b_40,
  fontWeight: '700',
  color: themeVars.color.white,
});

export const contentContainer = style({
  position: 'absolute',
  bottom: '15.87rem',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  width: '100%',
  maxWidth: '33.5rem',
});

export const titleContainer = style({
  display: 'flex',
  gap: '0.8rem',
  flexDirection: 'column',
});

export const textLogo = style({
  width: '23.6rem',
  height: '3.3rem',
});

export const description = style({
  ...themeVars.fontStyles.body_r_16,
  color: themeVars.color.lightgray500,
});

export const buttonContainer = style({
  display: 'flex',
  flexDirection: 'column',

  gap: '0.8rem',
});
