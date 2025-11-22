import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const container = style({
  paddingBottom: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const title = style({
  ...themeVars.fontStyles.head_sb_18,
});

export const inputBase = style({
  ...themeVars.fontStyles.body_r_16,
  border: `2px solid ${themeVars.color.lightgray100}`,
  backgroundColor: themeVars.color.lightgray100,
  padding: '1.6rem 1.2rem',
  borderRadius: '1rem',
  width: '100%',
  outline: 'none',
  fontFamily: 'inherit',

  selectors: {
    '&::placeholder': {
      color: themeVars.color.lightgray500,
    },
    '&:focus': {
      border: `2px solid ${themeVars.color.green500}`,
    },
  },
});

export const input = styleVariants({
  default: [
    inputBase,
    {
      borderColor: themeVars.color.lightgray100,
      color: themeVars.color.lightgray900,
    },
  ],
  active: [
    inputBase,
    {
      borderColor: themeVars.color.green500,
      color: themeVars.color.green800,
    },
  ],
});