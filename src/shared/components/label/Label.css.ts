import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '@/styles/theme.css';

export const label = recipe({
  base: {
    width: '4.5rem',
    height: '2.5rem',
    textAlign: 'center',
    borderRadius: '99.9rem',
    color: themeVars.color.white,
    fontSize: 12,
    lineHeight: '2.5rem',
  },
  variants: {
    styleType: {
      faith: {
        backgroundColor: themeVars.color.green700,
      },
      hope: { backgroundColor: themeVars.color.green600 },
      love: {
        backgroundColor: themeVars.color.green500,
      },
    },
  },
});
