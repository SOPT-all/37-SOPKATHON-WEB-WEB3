import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const backgroundContainer = style({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundImage: 'url(/bg_main.webp)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '3.2rem',
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
