import React from 'react';

//import componentes para que puedan usarse aca
import Props from './temario/Props';
import Tarea1 from './tareas/Tarea1';
import Estados from './temario/Estados';
//import Contador from './tareas/Contador';
import Efectos from './temario/Efectos';
import EstadosInnecesarios from './tareas/TareaGrupal';
import Formularios from './temario/Formularios';
import Cronometro from './tareas/Cronometro';
import Reloj from './tareas/Reloj';

const users = [
  {
    id: 1,
    name: "User 1",
    age: 20,
  },
  {
    id: 2,
    name: "User 2",
    age: 30,
  },
  {
    id: 3,
    name: "User 3",
    age: 40,
  },
  
];


const App = () => {
  return (
    /* <>
        <Props 
            nombre={"Paula"} 
            apellido={"Armengol"}   
        />
    </> */

    /* <Tarea1 
        //si voy a pasar como props un string, entonces no es necesario poner {}
        nombre="Paula"
        apellido="Armengol"
        edad={37}
        expectativas="Espero que este curso de React me de una base sólida para poder continuar mi camino como Frontend Developer."
        
    /> */

      /* <Contador /> */

      /* <Estados />  */

/*       <Efectos />
 */
         /* <EstadosInnecesarios users={users} /> 
 */
        /* <Formularios /> */
        
        <Reloj /> 
  )
}

export default App;
