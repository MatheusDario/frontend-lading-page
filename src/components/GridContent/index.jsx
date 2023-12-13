import P from 'prop-types';
import * as Styled from './styled';
import { SectionBackground } from '../SectionBackground';
import { Text } from '../Text';
import { Heading } from '../Heading';

export const GridContent = ({ title, html, $background = false }) => {
  return (
    <SectionBackground $background={$background}>
      <Styled.Container>
        <Heading $colordark={!$background}>{title}</Heading>
        <Styled.Html>
          <Text>{html}</Text>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  $background: P.bool,
};