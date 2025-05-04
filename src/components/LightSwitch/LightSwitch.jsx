import React, { useState } from 'react';

const LightSwitch = () => {

    const [lightSwitch ,setLightswitch] =useState(true);


    const handleLight = () => {

        setLightswitch(!lightSwitch);
    }

    return (
        <div style={
            {
                padding: '2rem',
                background: lightSwitch ? '#fff' : '#333', 
                color: lightSwitch ? '#000' : '#fff'
            }}>

            <h1>{lightSwitch ? 'Light Mode' : 'Dark Mode'}</h1>
            <button onClick={handleLight}>Toggle Mode</button>
            {/* <button>Light Mode</button> */}
        </div>
    );
};

export default LightSwitch;