import { Heading } from '../../components/Heading';
import * as Styled from './styles';
import P from 'prop-types';

export const App = () => {
  return (
    <Styled.Container>
      <Heading>Hello World</Heading>
    </Styled.Container>
  );
};

App.propTypes = {
  children: P.node,
};
