import React, { useState, useEffect, useRef } from 'react'

const getFormValues = (e) => Object.fromEntries(new window.FormData(e.target));



const FormNoControlado2 = () => {

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(getFormValues(e));


        // despues viene el proceso de backend:
        // enviar los datos al backend
        // te responde el backend
        // te da un token o datos del usuario
        // redirecciona a otra pagina

    };

    return (
        <div>
            <form
                name='form' 
                onSubmit={handleSubmit}>
                <input
                    name="email" 
                    type="email" />
                <input
                    name="password" 
                    type="password" />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    );
};



export default FormNoControlado2;