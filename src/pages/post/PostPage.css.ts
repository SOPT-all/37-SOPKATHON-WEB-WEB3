import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const container = style({
  padding: '2rem',
});

export const title = style({
  ...themeVars.fontStyles.head_sb_18,
  marginBottom: '2rem',
});

export const chipSection = style({
  borderTop: `1px solid ${themeVars.color.lightgray200}`,
  borderBottom: `1px solid ${themeVars.color.lightgray200}`,
  paddingTop: '1.6rem',
  paddingBottom: '1.6rem',
  marginBottom: '2rem',
});

export const chipContainer = style({
  display: 'flex',
  gap: '1.2rem',
});

export const submitButton = style({
  width: '100%',
  padding: '2rem',
  backgroundColor: themeVars.color.green500,
  color: themeVars.color.white,
  border: 'none',
  borderRadius: '0.8rem'
});

