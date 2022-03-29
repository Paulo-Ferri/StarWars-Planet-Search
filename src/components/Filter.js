import React, { useState, useContext } from 'react';
import context from '../context/MyContext';

function Filter() {
  const { createFilter, filter } = useContext(context);
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparision: 'maior que',
    value: '0',
  });

  const handleSelect = (value, id) => {
    switch (id) {
    case 'dropdown':
      setFilterByNumericValues({ ...filterByNumericValues, column: value });
      break;
    case 'comparator':
      setFilterByNumericValues({ ...filterByNumericValues, comparision: value });
      break;
    case 'valueFilter':
      setFilterByNumericValues({ ...filterByNumericValues, value });
      break;
    default: break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createFilter(filterByNumericValues);
  };

  const createFiltersOptions = () => {
    const options = ['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    if (filter.length > 0) {
      let filteredOptions = '';
      filter
        .forEach((filtro) => {
          console.log('filtro:', filtro);
          filteredOptions = options.filter((option) => option !== filtro.column);
        });
      return filteredOptions;
    }
    return options;
  };
  return (
    <form>
      <label htmlFor="dropdown">
        <select
          id="dropdown"
          data-testid="column-filter"
          onChange={ (e) => handleSelect(e.target.value, e.target.id) }
          value={ filterByNumericValues.column }
        >
          {createFiltersOptions()
            .map((option) => (
              <option key={ option } value={ option }>{option}</option>
            ))}
        </select>
      </label>
      <label htmlFor="comparator">
        <select
          id="comparator"
          data-testid="comparison-filter"
          onChange={ (e) => handleSelect(e.target.value, e.target.id) }
          value={ filterByNumericValues.comparision }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="valueFilter">
        <input
          data-testid="value-filter"
          type="number"
          id="valueFilter"
          onChange={ (e) => handleSelect(e.target.value, e.target.id) }
          value={ filterByNumericValues.value }
        />
      </label>
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ (e) => handleSubmit(e) }
      >
        Adicionar Filtro
      </button>
    </form>
  );
}

export default Filter;
