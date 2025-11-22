import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const submitButton = style({
  width: '100%',
  padding: '2rem',
  backgroundColor: themeVars.color.green500,
  color: themeVars.color.white,
  border: 'none',
});

