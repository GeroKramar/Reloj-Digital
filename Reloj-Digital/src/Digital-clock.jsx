import React from 'react'
import { useState } from 'react';

const DigitalClock = () => {

    const [tiempo, setTiempo] = useState(new Date);

    setTimeout(() => {
        setTiempo(new Date());
    }, 1000);

    return (
        <>
            {tiempo.toLocaleTimeString()} {
            /* toLocaleTimeString() es un método de la clase Date que devuelve la hora en formato local */}
        </>

    );
};


export default DigitalClock;