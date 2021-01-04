import type { TVariant, TTag } from '@/components/Text/Text.types';

export const variantTags: Record<TVariant, TTag> = {
  caption: 'span',
  body: 'p',
  header1: 'h2',
  header2: 'h2',
  header3: 'h3',
  subheader: 'p',
  link: 'a',
};
