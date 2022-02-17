import React, { useState } from 'react';
import './style.css';
import ListCities from './ListCities';
import Cities from './Cities';

export default function App() {
  const [cities, setCities] = useState([
    { name: 'Москва', description: 'Столица России' },
    { name: 'Санкт-Петербург', description: 'Северная столица' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (n, description) => {
    setCities(
      cities.map((city, index) => {
        if (index === n) {
          return {
            ...city,
            description,
          };
        }
      })
    );
    {
      console.log(city);
    }
  };

  const handleSelectCity = (n) => setCurrentIndex(n);

  return (
    <div>
      <Cities
        cities={cities}
        onChangeCity={handleChange}
        currentIndex={currentIndex}
      />
      <ListCities cities={cities} onSelectCity={handleSelectCity} />
    </div>
  );
}
