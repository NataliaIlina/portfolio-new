import styled from 'styled-components';

export const SSkills = styled.div`
  width: 440px;
  height: 440px;
  justify-content: center;
  position: relative;
`;

export const SSkillWrapper = styled.div`
  padding-bottom: 360px;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -40px;
  transform: rotate(-30deg);

  svg {
    transform: rotate(30deg);
  }

  &:nth-child(2) {
    transform: rotate(30deg);

    svg {
      transform: rotate(-30deg);
    }
  }

  &:nth-child(3) {
    transform: rotate(90deg);

    svg {
      transform: rotate(-90deg);
    }
  }

  &:nth-child(4) {
    transform: rotate(150deg);

    svg {
      transform: rotate(-150deg);
    }
  }
  &:nth-child(5) {
    transform: rotate(210deg);

    svg {
      transform: rotate(-210deg);
    }
  }
  &:nth-child(6) {
    transform: rotate(270deg);

    svg {
      transform: rotate(-270deg);
    }
  }
`;
