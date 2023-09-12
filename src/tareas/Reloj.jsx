import React, { useState, useEffect } from 'react'
import Cronometro from './Cronometro';

// 1) creo componente RELOJ
const Reloj = () => {

    //2) defino el TIME como el ESTADO A SETEAR
    // y uso la funcion Date() para obtener la fecha actual
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
          setTime(new Date());
        }, 1000);
    
        return () => clearInterval(intervalID);
      }, []);

      return (
        <div>
          <h1>Reloj</h1>
          <p>{time.toLocaleTimeString()}</p>
          <br />
          <hr/>
          <Cronometro />
        </div>
      );
    };


export default Reloj;