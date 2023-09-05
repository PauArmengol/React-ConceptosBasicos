import React, { useState, useEffect } from 'react';

// useEffect es un hook que permite ejecutar código cuando el componente se monta, se desmonta o se actualiza
// sirve para manipular el ciclo de vida de un componente funcional
// fue creado para manejar LOS SIDE EFFECTS (Efectos Secundarios)

//useEffect(() => {}, []); // ASI EN MONTAJE
// En MONTAJE : la funcion useEffect recibe un CALLBACK como primer parámetro y un ARRAY de dependencias vacio como segundo parámetro
// si quiero que algo se ejecute en esta etapa, tengo que ponerlo en el callback
// lo que aparezca en el callback se va a ejecutar 1 sola vez

//useEffect(() => {}, [dps]) // ASI EN MONTAJE Y ACTUALIZACIÓN
// En MONTAJE y ACTUALIZACIÓN, la funcion useEffect recibe un CALLBACK como primer parámetro y un ARRAY de dependencias que recibe lo que UseEffect va a estar escuchando para ejecutarse cuando eso cambie

//useEffect(() => { return () => {}; }, []) // ASI EN DESMONTAJE
//En DESMONTAJE, la funcion UseEffect recibe un CALLBACK que dentro recibe una funcion CLEAN UP, y un ARRAY
// La funcion CLEAN UP dentro del callback, se va a ejecutar cuando:
            // a. El componente se destruya (porque me fui de la pagina por ej.)
            // b. Cambie la dependencia que useEffect esta escuchando en el [], si le pase algo en el [].


// EFECTOS SECUNDARIOS: son acciones que se realizan fuera del componente
// por ejemplo: hacer un pedido a un servidor, guardar en el local storage, etc
// los efectos secundarios se realizan en el hook useEffect
 


const Efectos = () => {

    // creo un contador
    const [count, setCount] = useState(0);

    //ES MALA PRACTICA USAR USEEFFECT ASI
    //DIRECTAMENTE ESTO SE MANEJA CON useState y el manejador de eventos

    useEffect(() => {
        console.log("Se ejecutó el cambion en el Montaje")
    }, []); 


    useEffect(() => {
        console.log("El contador cambió")
    }, [count]); 


    useEffect(() => {
        //clean up
        return () => {
            console.log("Se desmontó");
        };
    }, [])


    return (
        <div>
            <button
            onClick={ ()=> {
                setCount(count + 1)
            }}
            > + </button>
        </div>
    )
};

export default Efectos;