import type { TBreakpoint } from 'styled-components';
import { rgba } from 'polished';

export const breakpoints = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1280,
};

export const common = {
  white: '#ffffff',
  black: '#000000',
  brown: '#736c4e',
  yellow: '#dab50b',
};

const theme = {
  breakpoints,
  media: {
    down: (value: TBreakpoint): string => `@media (max-width: ${breakpoints[value]}px)`,
    up: (value: TBreakpoint): string => `@media (min-width: ${breakpoints[value]}px)`,
  },
  colors: {
    common,
    text: {
      primary: common.yellow,
      secondary: common.brown,
    },
    background: {
      default: common.black,
    },
  },
  fontFamily: {
    default: 'Verdana',
    secondary: 'Georgia',
  },
  boxShadow: {
    white: `0 0 19.2px 4.8px ${rgba(common.white, 0.45)}`,
    brown: `0 0 19.2px 4.8px ${rgba(common.yellow, 0.45)}`,
  },
  space: [],
};

export default theme;
