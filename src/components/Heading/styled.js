import styled, { css } from 'styled-components';

const TitleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
};

const TitleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
 ${({ theme, colorDark, size, uppercase }) => css`
  color: ${colorDark ? theme.colors.blue : theme.colors.white};
  ${TitleSize[size](theme)};
  ${TitleCase(uppercase)};
 `}
`;
