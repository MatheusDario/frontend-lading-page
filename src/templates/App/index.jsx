/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { mapData } from '../../api/map-data';
import * as Styled from './styles';
import P from 'prop-types';

export const App = () => {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      //Nome diferente do repositório
      const apiData = await fetch(
        'http://localhost:1337/api/pages?populate=deep',
      );
      const json = await apiData.json();

      const pageData = mapData([json.data[0].attributes]);
      setData(pageData[0]);
      console.log(pageData[0]);
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <h1>Página não encontrada</h1>;
  }

  if (data && !data.slug) {
    return <h1>Carregando....</h1>;
  }

  return <Base {...mockBase} />;
};

App.propTypes = {
  children: P.node,
};
