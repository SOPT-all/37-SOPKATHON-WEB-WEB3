import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const tab = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
});

export const tabMenu = recipe({
  base: {
    textAlign: 'center',
    lineHeight: '4.8rem',
    height: '4.8rem',
    fontSize: 16,
    cursor: 'pointer',
  },
  variants: {
    styleType: {
      active: {
        color: 'black',
        borderBottom: `3px solid ${themeVars.color.green600}`,
        fontWeight: '600',
      },
      unActive: {
        color: 'gray',
        borderBottom: `1px solid ${themeVars.color.lightgray300}`,
        fontWeight: '500',
      },
    },
  },
});
