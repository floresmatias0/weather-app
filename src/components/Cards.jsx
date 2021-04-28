import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <>
      <div>
        <h1>¿Como esta el clima hoy en...?</h1>
      </div>
      <div className='cards'>
        
        {cities.map((c,key) => <Card
            key={key}
            uniqid={c.uniqid}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.uniqid)}
            id={c.id}
            description={c.description}
          /> )}
      </div>
      </>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
