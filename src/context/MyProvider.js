import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  // faz a chamada a API e salva no estado o retorno:
  const [data, setData] = useState('');
  const apiCall = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
    const { results } = await response.json();
    setData(results);
  };
  useEffect(() => { apiCall(); }, []);

  // estado para alterar o tipo do filtro:
  const [filter, setFilter] = useState([]);

  const createFilter = (newFilter) => {
    setFilter([...filter, newFilter]);
  };

  return (
    <MyContext.Provider value={ { data, createFilter, filter } }>
      {children}
    </MyContext.Provider>
  );
}
// utilizei a seguinte fonte para a validação da prop children:
// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
