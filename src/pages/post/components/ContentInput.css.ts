import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const container = style({
  padding: '2rem',
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
  color: themeVars.color.black,

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
    },
  ],
  active: [
    textareaBase,
    {
      borderColor: themeVars.color.green500,
    },
  ],
});

export const counter = style({
  position: 'absolute',
  bottom: '3rem',
  right: '3rem',
  ...themeVars.fontStyles.body_r_14,
  color: themeVars.color.green500,
});

