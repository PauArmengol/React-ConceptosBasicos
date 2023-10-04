import React, { useState, useEffect, useRef } from 'react'

//FORMULARIOS NO CONTROLADOS
//tengo que buscar la manera de capturar lo que este en los inputs
// 2 MANERAS DE CAPTURAR LA INFO DE LOS INPUTS:
// a) hook useRef -> permite mantener referencia durante el ciclo de vida del componente
// b)

const FormNoControlados = () => {

    // siempre inicializar la referencia, no dejarla vacia, ponerle un null
    // ME GUARDO EN UNA CONSTANTE, LA REFERENCIA AL ELEMENTO DEL DOM PARA DESPUES
    // CON LA PROPIEDAD CURRENT PODER ACCEDER AL VALOR GUARDADO
    const formRef = useRef(null);

    const handleSubmit = (e) => {

        //evita la recarga de la pagina y que se maten todos los estados
        e.preventDefault();

        // console.log de referencia
        // me devuelve por consola lo mismo que me devolvia e.target
        console.log(formRef.current);

        // OTRA FORMA CON JAVASCRIPT DE ACCEDER A VALORES (NO CON REACT)
        const formData = new FormData(formRef.current);
        const email = formData.get('email');
        const password = formData.get('password');

        // TRUCO DE JS
        

    
        
    };

    return (
        <div>
            <form 
                ref={formRef}
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



export default FormNoControlados;