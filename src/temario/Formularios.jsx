import React, { useState }from 'react'

//FORMULARIOS 
// recordamos que hay:
// 2 tipos de componentes por ESTADO: STATELESS y STATEFULL
// 2 tipos de componetes por CONTROL: CONTROLADOS y NO CONTROLADOS


// Los formularios se pueden manejar por CONTROLADOS y NO CONTROLADOS.

//FORMULARIO CONTROLADO: veo en pantalla exactamente lo que esta guardado en memoria, sirve por ejemplo para validaciones en tiempo real.

const Formularios = () => {

    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <input
                type="text" 
                onChange={ handleChange }
                value={email}
                /> 
        </div>
    );
};

export default Formularios;