import React, { useState } from 'react';

const Counter = () => {

    const [counter,setCounter] = useState(1);
    return (
        <div>
            <h1>counter:{counter}</h1>
        </div>
    );
};

export default Counter;