import React from 'react';

const Input = (props) => {
    return (
    <div className = "input-type">
        <label>{props.label}</label>
        <input type={props.type} id={props.id} />
    </div>
    );
};

export default Input;