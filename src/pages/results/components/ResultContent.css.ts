import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const content = style({
  // body_m_16
  minWidth: 0,
  fontSize: 16,
  fontWeight: '500',
  lineHeight: '1.3',
  color: themeVars.color.lightgray900,
  whiteSpace: 'pre-wrap',
});
