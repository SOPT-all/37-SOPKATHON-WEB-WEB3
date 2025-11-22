// src/shared/components/GlobalLoadingScreen.css.ts

import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';
export const loadingScreen = style({
  width: '100%',
  height: '150px',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 150,
});

export const loadingText = style({
  ...themeVars.fontStyles.body_m_14,
  paddingTop: '3.6rem',
  color: themeVars.color.black,
});
