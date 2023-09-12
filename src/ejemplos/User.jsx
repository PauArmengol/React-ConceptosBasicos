import React from 'react'

//CREO UN COMPONENTE AISLADO QUE ME VA A SERVIR SIEMPRE QUE NECESITE 
//PORQUE NO ESTA ATADO A LA INFORMACION QUE MUESTRA, 
// NO TIENE DEPENDENCIAS CON NADA EXTERNO


function User({ name, age }) {
  return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
    </div>
  );
}


export default User;