import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '1px solid blue',
        color: 'blue',
        padding: '5px'
    }

    return <input 
    onChange={props.changed}
    type='text'
    value={props.currentName}
    style={inputStyle}
    />   
}

export default userInput;