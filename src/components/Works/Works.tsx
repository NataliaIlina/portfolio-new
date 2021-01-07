import React from 'react';
import { AcademyIcon, LigaIcon, SferaIcon, SqvrIcon } from '@/components/icons/works';
import { Flex } from 'reflexbox';
import { SWorks } from './Works.styled';

const Works: React.FC = () => (
  <SWorks>
    <Flex justifyContent="space-between" alignItems="center" width="100%">
      <AcademyIcon />
      <LigaIcon />
    </Flex>
    <Flex justifyContent="space-between" alignItems="center" width="100%" mt="auto">
      <SqvrIcon />
      <SferaIcon />
    </Flex>
  </SWorks>
);

export default Works;
