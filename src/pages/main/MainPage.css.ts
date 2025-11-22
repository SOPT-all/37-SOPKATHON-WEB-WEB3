import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const backgroundContainer = style({
  position: 'relative',
  minHeight: '100vh',
  backgroundImage: 'url(/bg_main.webp)',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const cloverContainer = style({
  position: 'relative',
  width: '33.5rem',
  height: '33.5rem',
  marginBottom: '5rem',
});

export const clover = style({
  width: '100%',
  height: '100%',
});

const textGroupBase = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  opacity: 0.6,
});

export const cloverTextTop = style([
  textGroupBase,
  {
    top: '15%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
]);

export const cloverTextLeft = style([
  textGroupBase,
  {
    bottom: '33%',
    left: '23%',
  },
]);

// 👉 오른쪽 잎 (사랑)
export const cloverTextRight = style([
  textGroupBase,
  {
    bottom: '33%',
    right: '23%',
  },
]);

export const cloverLabel = style({
  ...themeVars.fontStyles.caption1_b_12,
  color: themeVars.color.white,
  marginBottom: '-0.2rem',
  opacity: 0.8,
});

export const cloverNumber = style({
  ...themeVars.fontStyles.head_b_40,
  fontWeight: '700',
  color: themeVars.color.white,
});

export const contentContainer = style({
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  width: '100%',
  maxWidth: '33.5rem',
  marginTop: '2rem',
});

export const titleContainer = style({
  display: 'flex',
  gap: '0.8rem',
  flexDirection: 'column',
  alignItems: 'center',
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
