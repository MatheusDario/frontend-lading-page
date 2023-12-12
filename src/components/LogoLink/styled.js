/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.a`
${({ theme }) => css`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  ${theme.breakpoints.mobile} {
    font-size: ${theme.font.sizes.small};
  }

  > img {
    max-height: 2.5rem;
  }
`}
`;
