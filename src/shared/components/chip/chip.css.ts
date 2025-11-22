import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const baseChipStyle = {
  display: 'flex',
  gap: '0.4rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '8.4rem',
  height: '3.6rem',
  borderRadius: '0.8rem',
  fontSize: '1.6rem',
  fontWeight: '600',
  border: 'none',
};

export const chipStyleActive = style({
  ...baseChipStyle,
  backgroundColor: themeVars.color.green600,
  color: themeVars.color.white,
});

export const chipStyleInactive = style({
  ...baseChipStyle,
  backgroundColor: themeVars.color.white,
  color: themeVars.color.green600,
  border: `0.15rem solid ${themeVars.color.green600}`,
});
