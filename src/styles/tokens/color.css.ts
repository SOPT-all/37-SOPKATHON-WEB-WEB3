import { createGlobalTheme } from '@vanilla-extract/css';

export const color = createGlobalTheme(':root', {
  //global
  white: '#ffffff',
  black: '#000000',

  //brand
  green50: '#E6FFEF',
  green100: '#D0FFE1',
  green200: '#9BDEB3',
  green300: '#7DD49F',
  green400: '#66C687',
  green500: '#37BC69',
  green600: '#26AD59',
  green700: '#108B3F',
  green800: '#107837',
  green900: '#0A5E2A',

  orange50: '#FFF0E1',
  orange100: '#FFE6CD',
  orange200: '#FFD4AA',
  orange300: '#FCC992',
  orange400: '#FEBD79',
  orange500: '#FEAC56',
  orange600: '#F48F25',
  orange700: '#E17707',
  orange800: '#B55D00',
  orange900: '#8A4700',

  // coolgray_light
  lightgray100: '#f5f7fa',
  lightgray200: '#EBEDF0',
  lightgray300: '#DCDEE1',
  lightgray400: '#C4C5C8',
  lightgray500: '#ABACAF',
  lightgray600: '#939496',
  lightgray700: '#494A4B',
  lightgray800: '#313132',
  lightgray900: '#181819',
});
