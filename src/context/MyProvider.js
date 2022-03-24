import React from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  return (
    <MyContext.Provider value="teste">
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
