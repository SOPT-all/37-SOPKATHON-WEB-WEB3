import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const title = style({
  ...themeVars.fontStyles.head_b_24,
  color: themeVars.color.green200,
});
