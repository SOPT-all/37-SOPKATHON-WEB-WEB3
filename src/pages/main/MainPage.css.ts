import { style } from '@vanilla-extract/css';

export const backgroundContainer = style({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundImage: 'url(/bg_main.webp)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});
