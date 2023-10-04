import React from 'react';

//import componentes para que puedan usarse aca
import Props from './temario/Props';
import Tarea1 from './tareas/Tarea1';
import Estados from './temario/Estados';
import Contador from './tareas/Contador';
import Efectos from './temario/Efectos';
import EstadosInnecesarios from './tareas/TareaGrupal';
import Formularios from './temario/Formularios';
import Cronometro from './tareas/Cronometro';

import CronometroUseRef from './tareas/CronometroUseRef';
import FormNoControlados from './temario/FormNoControlados';
import Ref from './temario/Ref';
import FormNoControlado2 from './temario/FormNoControlado2';
import Padre from './temario/Cb/Padre';
import Lista from './temario/RenderProps/Lista';
import Item from './temario/RenderProps/Item';

const nombres = [
  {
    id: 1,
    texto: "Paula"
  },
  {
    id: 2,
    texto: "Pedro"
  },
  {
    id: 3,
    texto: "Carlos"
  }
]

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
        /* <Formularios />  */
        
        /* <CronometroUseRef /> */

         /* <FormNoControlados />  */
    
         /* <FormNoControlado2 />  */

        /* <Ref /> */

        /* <Padre /> */

        <Lista
          items={nombres}
          renderItem={ (item ) => {
            return (
              <Item 
                key={item.id}
                nombre={item.texto}
              />
            )
          }}
        />
        
  )
}

export default App;
