import P from 'prop-types';
import * as Styled from './styled';
import { SectionContainer } from '../SectionContainer';
import { Text } from '../Text';

export const Footer = ({ html }) => {
  return (
    <SectionContainer>
      <Styled.Container>
        <Text>{html}</Text>
      </Styled.Container>
    </SectionContainer>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
