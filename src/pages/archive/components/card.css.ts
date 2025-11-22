import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const cardStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  padding: '0.8rem 0',
  width: '33.5rem',
});

export const cardTitleStyle = style({
  fontSize: '2rem',
  fontWeight: '600',
  lineHeight: '100%',
  color: themeVars.color.lightgray900,
});

export const cardCreatedAtStyle = style({
  fontSize: '1.4rem',
  fontWeight: '400',
  lineHeight: '140%',
  color: themeVars.color.lightgray600,
});
