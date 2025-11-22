import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const container = style({
  paddingBottom: '2rem',
  position: 'relative',
  width: '100%',
});

export const textareaBase = style({
  ...themeVars.fontStyles.body_r_16,
  width: '100%',
  minHeight: '20rem',
  padding: '1.6rem',
  paddingBottom: '4rem',
  borderRadius: '1rem',
  border: `2px solid ${themeVars.color.lightgray100}`,
  backgroundColor: themeVars.color.lightgray100,
  outline: 'none',
  resize: 'none',
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

export const textarea = styleVariants({
  default: [
    textareaBase,
    {
      borderColor: themeVars.color.lightgray100,
      color: themeVars.color.lightgray900,
    },
  ],
  active: [
    textareaBase,
    {
      borderColor: themeVars.color.green500,
      color: themeVars.color.green800,
    },
  ],
});

export const counter = styleVariants({
  default: {
    position: 'absolute',
    bottom: '3rem',
    right: '1rem',
    ...themeVars.fontStyles.body_r_14,
    color: themeVars.color.lightgray500,
  },
  active: {
    position: 'absolute',
    bottom: '3rem',
    right: '1rem',
    ...themeVars.fontStyles.body_r_14,
    color: themeVars.color.green500,
  },
});

