import React, { useState, useEffect, useRef } from 'react'

const CronometroUseRef = () => {

    // tengo 2 estados porque se usan para el renderizado
    const [time, setTime] = useState(null);
    const [now, setNow] = useState(null);
    // tengo una ref porque no se usa para el renderizado
    const intervalRef = useRef(null)

    // funciones para manejar eventos:

    const handleStart = () => {
        setTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    };
    
    const handleStop = () => {
        clearInterval(intervalRef.current);
    };

    let secondsPassed = 0;
    if (time != null && now != null) {
        secondsPassed = (now - time) / 1000;
    };

    // retorna UI

    return (

        <div>

            <h2>Tiempo transcurrido: {secondsPassed.toFixed(3)}</h2>

            <button 
                onClick={handleStart} 
            >Start</button>

            <button 
                onClick={handleStop}
            >Stop</button>

        </div>
    )
};

export default CronometroUseRef