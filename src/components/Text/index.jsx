import P from 'prop-types';
import * as Styled from './styled';

export const Text = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Text.propTypes = {
  children: P.node.isRequired,
};
