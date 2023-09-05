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

    const handleIncrement = () => {
        setIntegrante((prev) => (prev + 1) % grupo.integrantes.length);
    };

    const handleDecrement = () => {
        setIntegrante((prev) => (prev - 1 + grupo.integrantes.length) % grupo.integrantes.length);
    };

    const integranteActual = grupo.integrantes[integrante];

    return (
        <>
            <button 
                onClick={handleDecrement}
            >←</button>

            <h1>Somos {grupo.titulo}</h1>
            <h2>Este es nuestro grupo de trabajo de React comisión 23646</h2>
            <br />
            <h2>{integranteActual.nombre}</h2>
            <p>Edad: {integranteActual.edad} años</p>
            <br />

            <button 
                onClick={handleIncrement}
            >→</button>
        </>
    );
}

export default GrupoReact;