import React, { useState } from 'react'



//hacer FORMULARIO CONTROLADO que tenga tambien otros tipos de INPUTS: CHECKBOX ( 2 O 3 opciones), TEXTAREA, SELECT.

// GUARDO DINAMICAMENTE ALGO EN UN ESTADO
//que apretar un boton, muestre el estado del formulario

const FormControlado = () => {

    // 1 USESTATE QUE TIENE DECLARADO UN OBJETO CON EL NOMBRE DE LOS INPUTS
    const [form, setForm] = useState({});


    // 1 FUNCION HANDLECHANGE QUE SETEA EL ESTADO PORQUE IDENTIFICA DINAMICAMENTE
    // CUAL ES EL NOMBRE DEL INPUT Y CUAL ES EL VALOR QUE TIENE ADENTRO
    const handleChange = (e) => {};


    return (
    
    // INPUTS Y BOTON DE SUBMIT
        <div>

            <h2>Formulario</h2>


            <input />
            <input />
            <input />
            <input />
            <input />
            <input />





            <button
                onClick={() => {}}
            >
                Enviar
            </button>

        </div>
    );






}


export default FormControlado

