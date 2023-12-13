import P from 'prop-types';
import * as Styled from './styled';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridSection = ({ title, description, $background, grid }) => {
  return (
    <SectionBackground $background={$background}>
      <Styled.Container>
        <Heading $colordark={!$background}>{title}</Heading>
        <Text>{description}</Text>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading
                $uppercase={false}
                size="medium"
                $colordark={!$background}
              >
                {el.title}
              </Heading>
              <Text>{el.description}</Text>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridSection.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  $background: P.bool,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};
