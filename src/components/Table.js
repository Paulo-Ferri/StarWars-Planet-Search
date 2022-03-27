import React, { useContext, useState } from 'react';
import context from '../context/MyContext';

function Table() {
  const { data, filter } = useContext(context);
  const [filterByName, setFilterByName] = useState({
    name: '',
  });
  const handleChange = ({ target }) => {
    setFilterByName({
      name: target.value,
    });
  };
  // faz o filtro da data a partir dos parametros estabelecidos:
  const filterByValues = () => {
    // por nome:
    let filteredPlanets = data
      .filter((planet) => planet.name.includes(filterByName.name));
    // por filtros de numero:
    if (filter) {
      filter.forEach((item) => {
        filteredPlanets = filteredPlanets.filter((element) => {
          const { column, comparision, value } = item;
          switch (comparision) {
          case 'maior que':
            return +element[column] > +value;
          case 'menor que':
            return +element[column] < +value;
          case 'igual a':
            return +element[column] === +value;
          default: return undefined;
          }
        });
      });
    }
    return filteredPlanets;
  };

  return (
    <>
      <label htmlFor="search">
        <input
          data-testid="name-filter"
          type="text"
          id="search"
          onChange={ handleChange }
        />
      </label>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {data
            && filterByValues().map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
