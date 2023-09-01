import React from 'react'


/* Crear una card de presentacion que reciba por props los siguientes datos:
    - Nombre,
    - Apellido,
    - Edad,
    - Expectativas de la cursada
*/

// COMPONENTE STATELESS = componente sin estado
//componente que no tiene logica, solo recibe datos y muestra datos.
const Tarea1 = (props) => {
  return (
    <div>
        <h1>Presentacion</h1>
        <h2>Hola, me llamo {props.nombre} {props.apellido}.</h2>
        <h2>Tengo {props.edad} años.</h2>
        <h3>{props.expectativas}</h3>
    </div>
  )
}

/* APLICANDO DESTRUCTURING A LAS PROPS QUEDARIA ASI:
const Tarea1 = ({nombre, apellido, edad, expectativas}) => {
  return (
    <div>
        <h1>Presentacion</h1>
        <h2>Hola, me llamo {nombre} {apellido}.</h2>
        <h2>Tengo {edad} años.</h2>
        <h3>{expectativas}</h3>
    </div>
  )
}
*/
export default Tarea1