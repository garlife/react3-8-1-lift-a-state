import React, {useState} from "react";

export default function ListCities() {
  const [cities, setCities] = useState([
    { name: 'Москва', desription: 'Столица России' },
    { name: 'Санкт-Петербург', desription: 'Северная столица' },
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
