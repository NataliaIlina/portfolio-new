import 'styled-components';
import { breakpoints } from '@/styled/theme';

declare module 'styled-components' {
  export type TBreakpoint = keyof typeof breakpoints;
  export interface DefaultTheme {
    breakpoints: Record<TBreakpoint, number>;
    media: {
      up: (value: TBreakpoint) => string;
      down: (value: TBreakpoint) => string;
    };
    colors: {
      text: {
        primary: string;
        secondary: string;
      };
      background: {
        default: string;
      };
    };
    fontFamily: {
      default: string;
      secondary: string;
    };
    space: number[];
  }
}
