import React, {useState} from 'react';
import uniqid from 'uniqid'
import './App.css';
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx';

//uniqid genera id aleatorio

function App() {

  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=5300283ec29db600e98af99dc934b85a`)
      .then(r => r.json())
      .then((recurso) => {
        console.log(recurso)
        if(recurso.main !== undefined){
          const ciudad = {
            uniqid: uniqid("mati-"),
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            description:recurso.weather[0].description,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

    function onClose(uniqid) {
      setCities(oldCities => oldCities.filter(c => c.uniqid !== uniqid));
    }

    return (
      <div className="App">
        <Nav onSearch={onSearch}/>
        <Cards cities={cities} onClose={onClose}/>
      </div>
    );
  }

export default App;
