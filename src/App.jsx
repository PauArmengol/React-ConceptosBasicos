import React from 'react';

//import componentes para que puedan usarse aca
import Props from './temario/Props';
import Tarea1 from './tareas/Tarea1';
import Estados from './temario/Estados';
//import Contador from './tareas/Contador';
import Efectos from './temario/Efectos';
import GrupoReact from './tareas/TareaGrupal';

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
        <GrupoReact />
        

  )
}

export default App
