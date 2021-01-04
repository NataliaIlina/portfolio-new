import React from 'react';
import type { FontSizeProps, SpaceProps, TextAlignProps } from 'styled-system';

export type TTag =
  | 'p'
  | 'span'
  | 'a'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'li'
  | 'label';

export type TVariant =
  | 'caption'
  | 'link'
  | 'body'
  | 'header1'
  | 'header2'
  | 'header3'
  | 'subheader';

export type TTextProps = React.AnchorHTMLAttributes<HTMLLinkElement> & {
  variant?: TVariant;
  tag?: TTag;
  withTopDecor?: boolean;
} & SpaceProps &
  FontSizeProps &
  TextAlignProps;
