import React, {useState} from "react";

export default function ListCities() {
  const [cities, setCities] = useState([
    { name: 'Москва', description: 'Столица России' },
    { name: 'Санкт-Петербург', description: 'Северная столица' },
  ]);

  return (
    <ul>
      {cities.map( (city) => {
        return (
          <li key={city.name}>{city.name}</li>
        )
      })}
    </ul>
  );
}
