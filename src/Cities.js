import React, { useState } from 'react';

export default function Cities() {
  const [cities, setCities] = useState([
    { name: 'Москва', desription: 'Столица России' },
    { name: 'Санкт-Петербург', desription: 'Северная столица' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const city = cities[currentIndex];

  const handleChange = (e) => {
    setCities(
      cities.map((city, index) => {
        if (index === currentIndex) {
          return {
            ...city,
            description: e.target.value,
          };
        }
      })
      
    );
    {console.log(city)}
  };

  return (
    <div>
      <h3>{city.name}</h3>
      <textarea value={city.desription} onChange={handleChange} />
      
    </div>
  );
}
