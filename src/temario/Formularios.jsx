import React, { useState }from 'react'

//FORMULARIOS 
// recordamos que hay:
// 2 tipos de componentes por ESTADO: STATELESS y STATEFULL
// 2 tipos de componetes por CONTROL: CONTROLADOS y NO CONTROLADOS


// Los formularios se pueden manejar por CONTROLADOS y NO CONTROLADOS.

//FORMULARIO CONTROLADO: veo en pantalla exactamente lo que esta guardado en memoria, sirve por ejemplo para validaciones en tiempo real.


const Formularios = () => {

    const [form, setForm] = useState({
        email: "", //coincide con el 'name' del input
        password: "", //coincide con el 'name' del input
        direccion: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // hacer destructuring y poner const {name, value} = e.target es lo mismo que hacer:
        // const name = e.target.name;
        // const value = e.target.value; 
        
        //seteo del estado
        setForm({
            ...form, //uso SPREAD OPERATOR para agarrar todo el estado del form y actualiza solo el valor [name], asi creo un objeto nuevo con el mismo estado del form pero con el name actualizado
           //con SPREAD OPERATOR piso solo el input que elijo
            // [name] es igual a [e.target.name]
            [name]: value,
        })
    };

    return (
        /* LOS INPUT EN UN FORM CONTROLADO MUESTRAN LO QUE TENGA EL ESTADO GUARDADO */
        <div>
            <input
                //para vincular INPUT con ESTADO, uso la propiedad 'name'
                name='email'
                type="email" 
                onChange={ handleChange }
                value={form.email}
                /> 
            <input
                //para vincular INPUT con ESTADO, uso la propiedad 'name'
                name='password'
                type="password" 
                onChange={ handleChange }
                value={form.password}
                />
            <input 
                name='direccion'
                type='text'
                onChange={handleChange}
                value={form.direccion}
            /> 

            <button
                onClick={() => {
                    console.log(form);
                }}
            >
               Enviar 
            </button>
        </div>
    );
};

export default Formularios;