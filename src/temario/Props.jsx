import React from 'react'



// Las PROPS son propiedades (informacion) que le puedo pasar a un componente (funciones)
// Son como los parametros que se le pasan a una funcion

//Pueden usarse de 2 maneras: 
/* 
    Llamar al objeto:
    a)  const Props = (props) => {
        return (
            <></>
        )
    }

    Desestructurar el objeto:
    b) const Props = ({ nombre, apellido }) => {
        return (
            <></>
        )
    }



*/

const Props = (props) => {
  return (
    <div>
        <h1>{props.nombre} {props.apellido}</h1>
    </div>
  )
}


export default Props