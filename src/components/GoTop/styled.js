/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.a`
${({ theme }) => css`
  background-color: ${theme.colors.blue};
  border-radius: 50%;
  opacity: .6;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  right: 2rem;
  bottom: 2rem;
  z-index: 6;
`}
`;
