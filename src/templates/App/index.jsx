/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { mapData } from '../../api/map-data';
import * as Styled from './styles';
import P from 'prop-types';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

export const App = () => {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  //http://localhost:1337/api/pages?populate=deep

  useEffect(() => {
    const load = async () => {
      try {
        const apiData = await fetch(
          'http://localhost:1337/api/pages?populate=deep',
        );
        const json = await apiData.json();

        const pageData = mapData([json.data[0].attributes]);

        setData(pageData[0]);

        console.log(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  return <Base {...mockBase} />;
};

App.propTypes = {
  children: P.node,
};
