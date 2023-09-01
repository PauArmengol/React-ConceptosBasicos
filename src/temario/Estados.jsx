// ESTADO es una variable que declaro y que persiste durante el CICLO DE VIDA pudiendo tomar diferentes formas.
// ESTADO es una variable que puedo manipular y NO se va a resetear cuando el componente se vuelva a renderizar.
// es una variable que se puede modificar y que al modificarla se vuelve a renderizar el componente
// si cambia el ESTADO, el componente se renderiza

// HOOKS: funcion que permite traer funcionalidades de los componentes de clase a los componentes funcionales
// useState es un hook, un hook es una función que permite utilizar características de react en componentes funcionales
// empiezan con "use"

// useState : declaracion (funcion) para manejar (crear) un  estado
// useState recibe como parámetro el valor inicial del estado y devuelve un array con dos elementos
// El primer elemento es el valor del estado y el segundo es una función que permite modificar el estado
// Para acceder al valor del estado se utiliza el primer elemento del array
// Para modificar el estado se utiliza el segundo elemento del array



import React, { useState } from 'react';

const Estados = () => {

        const [state, setState] = useState("Paula");

        return (

            <div>

                <h1>{state}</h1>

            </div>

        );

};

export default Estados;