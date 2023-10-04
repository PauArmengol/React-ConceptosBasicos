import React from 'react'

const Hijo = (  { saludo = ( texto ) => {} }  ) => {

    const handleClick = ( e ) => {
        saludo("Hola Paula");
    };

    return (
        <div>
            <button
                onClick={handleClick}
            >
                Saludar
            </button>
        </div>
    )
}

export default Hijo