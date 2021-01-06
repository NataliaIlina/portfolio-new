import styled from 'styled-components';

export const SSkills = styled.div`
  width: 220px;
  height: 220px;
  position: relative;

  ${({ theme }) => theme.media.up('sm')} {
    width: 330px;
    height: 330px;
  }

  ${({ theme }) => theme.media.up('md')} {
    width: 440px;
    height: 440px;
    margin-right: 40px;
  }
`;

export const SIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 40px;
    height: 40px;
  }

  ${({ theme }) => theme.media.up('sm')} {
    width: 60px;
    height: 60px;

    svg {
      width: 60px;
      height: 60px;
    }
  }

  ${({ theme }) => theme.media.up('md')} {
    width: 80px;
    height: 80px;

    svg {
      width: 80px;
      height: 80px;
    }
  }
`;

export const SSkillWrapper = styled.div`
  padding-bottom: 180px;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -20px;
  transform: rotate(-30deg);

  ${({ theme }) => theme.media.up('sm')} {
    padding-bottom: 270px;
    margin-left: -30px;
  }

  ${({ theme }) => theme.media.up('md')} {
    padding-bottom: 360px;
    margin-left: -40px;
  }

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
