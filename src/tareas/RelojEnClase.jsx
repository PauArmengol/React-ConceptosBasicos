import React,  { useState, useEffect, useRef } from 'react'

const Reloj2 = () => {

    // 1) creo 1 solo ESTADO e inicializo una nueva (new) instancia de Date():
    const [time, setTime] = useState(new Date());

    // 2)
    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);


    return (
        // 3) con toLocalTimeString() obtengo la hora actual en formato hora:
        <div>{time.toLocaleTimeString()}</div>
    )
};


//export default Reloj2