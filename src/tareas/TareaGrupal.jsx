import React, { useState, useEffect } from 'react';

const grupo = {
    titulo: 'GrupoReact',
    integrantes: [{
        nombre: 'Paula Armengol',
        edad: 37
    },
    {
        nombre: 'Juan Jose Villagra',
        edad: 30
    }, 
    {
        nombre: 'Demian perez Straga',
        edad: 30
    }, 
    ],
}

const GrupoReact = () => {

    const [integrante, setIntegrante] = useState(0);

    const increment = () => {
        integrante < (grupo.integrantes.length - 1) ? setIntegrante(integrante + 1) : setIntegrante(0);
    };

    const decrement = () => {
        integrante === 0 ? setIntegrante(grupo.integrantes.length - 1) : setIntegrante(integrante - 1);
    };

    return (
        <>
            <button onClick={decrement}>←</button>
            <h1>Somos {grupo.titulo}</h1>
            <h2>Este es nuestro grupo de trabajo de React comisión 23646</h2>
            <h2>{grupo.integrantes[integrante].nombre}</h2>
            <p>{grupo.integrantes[integrante].edad} años</p>
            <br />
            <button onClick={increment}>→</button>
        </>
    )


}

   
export default GrupoReact;