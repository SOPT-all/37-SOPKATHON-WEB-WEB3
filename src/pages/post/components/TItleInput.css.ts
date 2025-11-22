import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const container = style({
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',
})

export const title = style({
    ...themeVars.fontStyles.head_sb_18,
})

export const input = style({
    ...themeVars.fontStyles.body_r_16,
    border: 'none',
    backgroundColor: themeVars.color.lightgray100,
    padding: '1.6rem 1.2rem',
    borderRadius: '1rem',
    width: '100%',
    outline: 'none',
})