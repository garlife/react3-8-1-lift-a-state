import React from 'react';

export default function ListCities(props) {
  return (
    <ul>
      {/* {props.cities.map((city, index) => (
        <li key={city.name} onClick={() => props.onSelectCity(index)}>
          {city.name} ({city.description})
        </li>
      ))} */}
      {props.cities.map((city) =><li key={city.name}>{city.name} ({city.description})</li> )}
    </ul>
  );
}
