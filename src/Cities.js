import React, { useState } from 'react';

export default function Cities(props) {
  const city = props.cities[props.currentIndex];

  return (
    <div>
      <h3>{city.name}</h3>
      <textarea value={city.description} onChange={(e) => props.onChangeCity(props.currentIndex, e.target.value)} />
      
    </div>
  );
}
