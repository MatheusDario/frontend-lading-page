import P from 'prop-types';
import * as Styled from './styled';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridTwoColumns = ({
  title,
  text,
  srcimg,
  $background = false,
}) => {
  return (
    <SectionBackground $background={$background}>
      <Styled.Container $background={$background}>
        <Styled.TextContainer>
          <Heading $colordark={!$background}>{title}</Heading>
          <Text>{text}</Text>
        </Styled.TextContainer>
        <Styled.ImgContainer>
          <Styled.Image src={srcimg} alt={title} />
        </Styled.ImgContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcimg: P.string.isRequired,
  $background: P.bool,
};