import { colors } from '@/styles/tokens/color.css';
import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
  backgroundColor: colors.gray400,
  border: 'none',
  color: colors.black,
  padding: '1rem 2rem',
  borderRadius: '0.8rem',
  cursor: 'pointer',

  selectors: {
    '&:disabled': {
      backgroundColor: colors.gray200,
      color: colors.gray400,
      cursor: 'not-allowed',
    },
    '&:hover:not(:disabled)': {
      backgroundColor: colors.gray700,
      color: colors.white,
    },
  },
});
