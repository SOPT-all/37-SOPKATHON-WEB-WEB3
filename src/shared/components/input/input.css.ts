import { colors } from '@/styles/tokens/color.css';
import { style } from '@vanilla-extract/css';

export const inputStyle = style({
  backgroundColor: colors.gray100,
  border: 'none',
  color: colors.black,
  padding: '1rem',
  borderRadius: '1rem',
  width: '30rem',
  fontSize: '1rem',

  selectors: {
    '&:focus': {
      outline: 'none',
      border: `1px solid ${colors.gray300}`,
    },
    '&::placeholder': {
      color: colors.gray400,
    },
  },
});
