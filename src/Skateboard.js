import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';

function Skateboard(props) {
    const skateboardStyle = {
        position: "relative",
        width: 100,
        top: props.top,
        left: props.left
    };
    

    return (
        <div style={{ height: 900 }}>
            <img src={'./skateboard_PNG11708.png'} alt="logo" style={skateboardStyle}/>
            <button onClick={props.next} style={{ position: "absolute", top: 600 }}>Next</button>
        </div>
    );
}

export default Skateboard;

