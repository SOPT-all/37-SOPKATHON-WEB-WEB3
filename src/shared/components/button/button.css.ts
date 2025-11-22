import { colors } from '@/styles/tokens/color.css';
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
      backgroundColor: '#EBEDF0',
      color: '#ABACAF',
    },
  },
};

export const buttonStyleOutline = style({
  ...baseButtonStyle,
  backgroundColor: '#26AD59',
  color: colors.white,
});

export const buttonStyleFilled = style({
  ...baseButtonStyle,
  backgroundColor: colors.white,
  color: '#26AD59',
  border: `0.2rem solid #26AD59`,
});
