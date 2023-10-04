import React, { useState, useRef } from 'react'

const Ref = () => {

    // creo estado contador porque cuando hay un estado, se obliga a renderizar
    const [countState, setCountState] = useState(0);

    // declaro variable contador
    let count = 0;

    // useRef 
    const countRef = useRef(0);

    const handleIncrement = (e) => {
        //count = count + 1 es lo mismo que count++
        count++;
        countRef.current = countRef.current + 1;
        setCountState(countState + 1);
    };

    const handleDecrement = (e) => {
        count--;
        setCountState(countState - 1);
        console.log(count);
    };

    return (

        <div>
            <h1>Contador variable: {count}</h1>
            <h1>Contador estado: {countState}</h1>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </div>

    );

};

export default Ref