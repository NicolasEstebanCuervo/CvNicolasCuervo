import React from 'react';
import '../HojasDeEstilo/Lenguajes.css' ;

function Lenguaje({imagen,lenguaje,descripcion}){
    return(
      <section className='contenedor-lenguaje'>
        <img 
        className='imagen-lenguaje'
        src={require(`../Imagenes/${imagen}.png`)} 
        alt={`Imagen de ${imagen}.png`} />
        <h1>{lenguaje}</h1>
        <p>{descripcion}</p>
      </section>
    );
}

export default Lenguaje;