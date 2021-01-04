import { css } from 'styled-components';

export const decoration = css`
  content: '';
  position: absolute;
  width: 70px;
  height: 3px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow.white};
  transition: all 0.3s;
`;

export const verticalDecoration = css`
  ${decoration};

  height: 70px;
  width: 3px;
`;
