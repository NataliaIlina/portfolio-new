import React, { useEffect, useRef, useState } from 'react';
import Text from '@/components/Text/Text';
import { SBlock } from '@/components/Content/Content.styled';
import { SDescription } from './ContentBlock.styled';

type TProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  image?: string;
  placement?: 'left' | 'right';
};

const ContentBlock: React.FC<TProps> = ({
  title,
  description,
  image,
  placement = 'left',
}) => {
  const [withAnimation, showAnimation] = useState(false);
  const blockRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (blockRef.current) {
        const rect = blockRef.current.getBoundingClientRect();

        if (rect.top <= window.innerHeight) {
          showAnimation(true);
        }
      }
    });
  }, []);

  return (
    <SBlock ref={blockRef} image={image} placement={placement}>
      <Text.header3 textAlign="center">{title}</Text.header3>

      <SDescription
        textAlign="center"
        withTopDecor
        withAnimation={withAnimation}
      >
        {description}
      </SDescription>
    </SBlock>
  );
};

export default ContentBlock;
