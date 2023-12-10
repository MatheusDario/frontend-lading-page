import P from 'prop-types';
import * as Styled from './styled';

export const Heading = ({ children }) => {
  return <Styled.Title>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
};
