import React, {useState} from "react";
import "./style.css";
import ListCities from "./ListCities";
import Cities from "./Cities"

export default function App() {
  const [cities, setCities] = useState([
    {name: 'Москва', description: 'Столица России' },
    {name: 'Санкт-Петербург', description: 'Северная столица' },
  ])
  return (
    <div>
      <Cities />
      <ListCities />
    </div>
  );
}
