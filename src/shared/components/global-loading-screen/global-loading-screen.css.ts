// src/shared/components/GlobalLoadingScreen.css.ts

import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';
export const loadingScreen = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
});

export const loadingText = style({
  ...themeVars.fontStyles.body_m_14,
  paddingTop: '3.6rem',
  color: themeVars.color.black,
});
