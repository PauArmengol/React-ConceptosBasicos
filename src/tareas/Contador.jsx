import React, { useState } from 'react';
import "./Contador.css";

const Contador = () => {

    //buena practica es que el INITIAL_VALUE esté en un archivo de constantes aparte.
    const INITIAL_VALUE = 0;

    const [contador, setContador] = useState(INITIAL_VALUE);

    const handleClickIncrement = () => {
        setContador(contador + 1 );
    };

    const handleClickDecrement = () => {
        setContador(contador - 1)
    };

    const handleClickReset = () => {
        setContador(INITIAL_VALUE)
    };

    const handleIncrementBy = (num) => {
        setContador(contador + num)
       
    };

    return (

        <div className='contador'>

            <button
            onClick={handleClickIncrement}
            >+</button>

            <h1>{contador}</h1>

            <button
            onClick={handleClickDecrement}
            >-</button>

            <button 
            className='reset'
            onClick={handleClickReset}
            >Reset</button>

            <button
            className='incrementby'
            onClick={() => handleIncrementBy(5)}
            >Increment By</button>

        </div>


    )

};

export default Contador;