import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: '8px 0',
});

export const title = style({
  // head_sb_20
  fontSize: 20,
  fontWeight: 600,
  color: themeVars.color.lightgray900,
});

export const date = style({
  // body_r_14
  fontSize: 14,
  fontWeight: 400,
  color: themeVars.color.lightgray400,
});
