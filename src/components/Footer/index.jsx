import P from 'prop-types';
import * as Styled from './styled';
import { Text } from '../Text';

export const Footer = ({ html }) => {
  return (
    <Styled.Container>
      <Text>{html}</Text>
    </Styled.Container>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
