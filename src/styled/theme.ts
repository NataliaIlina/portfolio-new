import type { TBreakpoint } from 'styled-components';

export const breakpoints = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1280,
};

const theme = {
  breakpoints,
  media: {
    down: (value: TBreakpoint): string =>
      `@media (max-width: ${breakpoints[value]}px)`,
    up: (value: TBreakpoint): string =>
      `@media (min-width: ${breakpoints[value]}px)`,
  },
  colors: {
    text: {
      primary: '#dab50b',
      secondary: '#736c4e',
    },
    background: {
      default: '#000000',
    },
  },
  fontFamily: {
    default: 'Verdana',
    secondary: 'Georgia',
  },
  space: [],
};

export default theme;
