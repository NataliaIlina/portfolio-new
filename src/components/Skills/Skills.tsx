import React from 'react';
import {
  MaterialIcon,
  JSIcon,
  ReactIcon,
  ReduxIcon,
  StyledIcon,
  TSIcon,
} from '@/components/icons/skills';
import { Flex } from 'reflexbox';
import { SSkillWrapper, SSkills } from '@/components/Skills/Skills.styled';

const SKILLS = {
  ts: <TSIcon />,
  redux: <ReduxIcon />,
  material: <MaterialIcon />,
  js: <JSIcon />,
  react: <ReactIcon />,
  styled: <StyledIcon />,
};

const Skills: React.FC = () => (
  <SSkills>
    {Object.keys(SKILLS).map((skill) => (
      <SSkillWrapper key={skill}>
        <Flex width={80} height={80} justifyContent="center" alignItems="center">
          {SKILLS[skill]}
        </Flex>
      </SSkillWrapper>
    ))}
  </SSkills>
);

export default Skills;
