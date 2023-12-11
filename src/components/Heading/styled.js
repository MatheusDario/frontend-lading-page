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
    ${MediaFont(theme)};
  `,
};

const TitleCase = ($uppercase) => css`
  text-transform: ${$uppercase ? 'uppercase' : 'none'};
`;

const MediaFont = (theme) => css`
  @media ${theme.breakpoints.mobile} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

export const Title = styled.h1`
 ${({ theme, $colordark, size, $uppercase }) => css`
  color: ${$colordark ? theme.colors.blue : theme.colors.white};
  ${TitleSize[size](theme)};
  ${TitleCase($uppercase)};
 `}
`;
