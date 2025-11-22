import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
  fontSize: '62.5%',
  fontFamily: `'Pretendard Variable', sans-serif`,
});

globalStyle('html, body, #root', {
  height: '100%',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
});
