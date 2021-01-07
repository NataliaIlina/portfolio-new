import React from 'react';
import {
  MaterialIcon,
  JSIcon,
  ReactIcon,
  ReduxIcon,
  StyledIcon,
  TSIcon,
} from '@/components/icons/skills';
import { SSkillWrapper, SSkills, SIconWrapper } from '@/components/Skills/Skills.styled';

const SKILLS = {
  js: <JSIcon />,
  react: <ReactIcon />,
  styled: <StyledIcon />,
  ts: <TSIcon />,
  redux: <ReduxIcon />,
  material: <MaterialIcon />,
};

const Skills: React.FC = () => (
  <SSkills>
    {Object.keys(SKILLS).map((skill) => (
      <SSkillWrapper key={skill}>
        <SIconWrapper>{SKILLS[skill]}</SIconWrapper>
      </SSkillWrapper>
    ))}
  </SSkills>
);

export default Skills;
