import React, { useState } from 'react';
import "./Contador.css";

const Contador = () => {

    const [contador, setContador] = useState(0);

    const handleClickIncrement = () => {
        setContador(contador + 1 );
    };

    const handleClickDecrement = () => {
        setContador(contador - 1)
    };

    return (

        <div className='contador'>

            <h1>Contador</h1>

            <button
            onClick={handleClickIncrement}
            >+</button>

            <h1>{contador}</h1>

            <button
            onClick={handleClickDecrement}
            >-</button>


        </div>


    )

};

export default Contador;