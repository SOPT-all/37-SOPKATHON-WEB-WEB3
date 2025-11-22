import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const archiveStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const archiveHeaderStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '1.2rem 2rem',
  backgroundColor: themeVars.color.lightgray100,
});

export const archiveHeaderTitleStyle = style({
  fontSize: '1.4rem',
  fontWeight: '400',
  color: themeVars.color.lightgray600,
});

export const archiveHeaderCountStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.2rem 2rem',
});

export const archiveContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  alignItems: 'center',
  marginTop: '0.4rem',
});

export const lineStyle = style({
  width: '33.5rem',
  height: '1px',
  backgroundColor: '#ECECEC',
});
