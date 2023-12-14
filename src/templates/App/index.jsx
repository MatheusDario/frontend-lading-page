/* eslint-disable no-unused-vars */
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import * as Styled from './styles';
import P from 'prop-types';

export const App = () => {
  return <Base {...mockBase} />;
};

App.propTypes = {
  children: P.node,
};
