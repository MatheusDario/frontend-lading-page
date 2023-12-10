import P from 'prop-types';
import * as Styled from './styled';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'big',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool.isRequired,
  uppercase: P.bool.isRequired,
  size: P.oneOf(['small', 'medium', 'big', 'huge']).isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
};
