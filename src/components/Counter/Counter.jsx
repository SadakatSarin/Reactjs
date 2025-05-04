import React, { useState,useCallback} from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const handleCounter = useCallback((value) => {

        setCounter((prev) => prev + value);

    });

    return (
        <div>
            <h1>counter:{counter}</h1>
            <button onClick={()=>handleCounter(-1)}>-</button> 
            <button  onClick={()=>handleCounter(1)}>+</button>
        </div>
    );
};

export default Counter;