import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: '20px 20px 40px 20px',
});

export const line = style({
  width: '100%',
  height: 1,
  backgroundColor: themeVars.color.lightgray200,
});
