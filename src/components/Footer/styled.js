/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    p {
      font-size: ${theme.font.sizes.small};
    }
    text-align: center;
  `}
`;
