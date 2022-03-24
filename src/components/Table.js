import React, { useContext, useState } from 'react';
import context from '../context/MyContext';

function Table() {
  const data = useContext(context);
  const [filterByName, setFilterByName] = useState({
    name: '',
  });
  const handleChange = ({ target }) => {
    setFilterByName({
      name: target.value,
    });
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
          {data && data.filter((planet) => planet.name
            .includes(filterByName.name !== '' ? filterByName.name : ''))
            .map((planet) => (
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
              </tr>))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
