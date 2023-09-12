import React, { useState, useEffect } from 'react';

import User from '../ejemplos/User';


const EstadosInnecesarios = ({ users }) => {

    //objetivo: 
    //controlamos el INDICE y mostramos o no un USUARIO:

    //1º: TENER EL INDICE GUARDADO EN UN ESTADO (currentIndex):
    const [currentIndex, setCurrentIndex] = useState(0);
   
    //2º: SETEO EL ESTADO (setCurrentIndex): 
    const handleNextUser = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);

        //CON OPERADOR TERNARIO:
        /* const newIndex = (currentIndex + 1 > users.length - 1) ? 0 : currentIndex + 1; */
        /* setCurrentIndex(newIndex); */
    
    };

    const handlePrevUser = () => {
        //CON OPERADOR TERNARIO:
        /* const newIndex = (currentIndex - 1 < 0) ? users.length - 1 : currentIndex - 1; */
        /* setCurrentIndex(newIndex); */
    };

    return (
        <div>
            <button onClick={handleNextUser}>{"-->"}</button>

        
            <User
                name={users[currentIndex].name}
                age={users[currentIndex].age}
            />

            <button onClick={handlePrevUser}>{"<--"}</button>
        </div>
    );
};


export default EstadosInnecesarios;