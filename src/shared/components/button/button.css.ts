import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const baseButtonStyle = {
  border: 'none',
  cursor: 'pointer',
  width: '33.5rem',
  height: '5.4rem',
  borderRadius: '0.8rem',
  fontSize: '1.8rem',
  fontWeight: '600',
  textAlign: 'center' as const,

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: themeVars.color.lightgray200,
      color: themeVars.color.lightgray500,
    },
  },
};

export const buttonStyleOutline = style({
  ...baseButtonStyle,
  backgroundColor: themeVars.color.green500,
  color: themeVars.color.white,
});

export const buttonStyleFilled = style({
  ...baseButtonStyle,
  backgroundColor: themeVars.color.white,
  color: themeVars.color.green500,
  border: `0.2rem solid ${themeVars.color.green500}`,
});
