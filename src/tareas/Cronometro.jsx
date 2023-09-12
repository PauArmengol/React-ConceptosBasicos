import React, { useState, useEffect } from 'react'



const Cronometro = () => {

    const [segundos, setSegundos] = useState(0);
    const [corriendo, setCorriendo] = useState(false);

  
    useEffect(() => {

        let intervalID;

        if (corriendo) {
            intervalID = setInterval(() => {
              setSegundos((prevSegundos) => prevSegundos + 1);
            }, 1000);
          } else {
            clearInterval(intervalID);
          }
      
          return () => clearInterval(intervalID);
        }, [corriendo]);
      
        const handleStartStop = () => {
          setCorriendo(!corriendo);
        };
      
  
        return (
            <div>
              <h2>Cronómetro</h2>
              <p>{`Segundos: ${segundos}`}</p>
              <button onClick={handleStartStop}>
                {corriendo ? 'Detener' : 'Iniciar'}
              </button>
            </div>
          );
  }
  
export default Cronometro;