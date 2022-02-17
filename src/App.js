import React, {useState} from "react";
import "./style.css";
import ListCities from "./ListCities";
import Cities from "./Cities"

export default function App() {
  const [cities, setCities] = useState([
    {name: 'Москва', desription: 'Столица России' },
    {name: 'Санкт-Петербург', desription: 'Северная столица' },
  ])
  return (
    <div>
      <Cities />
      <ListCities />
    </div>
  );
}
