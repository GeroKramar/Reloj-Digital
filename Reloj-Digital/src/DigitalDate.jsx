import React from 'react'
import { useState } from 'react';

const DigitalDate = () => {

    const [tiempo, setTiempo] = useState(new Date);

    setTimeout(() => {
        setTiempo(new Date());
    }, 1000);

    return (
        <>
            {tiempo.toLocaleDateString()} {
            /* toLocaleTimeString() es un método de la clase Date que devuelve la hora en formato local */}
        </>
        
    );
};
export default DigitalDate;