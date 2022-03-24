import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState('');
  const apiCall = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
    const { results } = await response.json();
    setData(results);
  };
  useEffect(() => { apiCall(); }, []);
  return (
    <MyContext.Provider value={ data }>
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
