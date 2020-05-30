import React from 'react';

const Input = (props) => {
    return (
        <div className="row mx-3 w-100">
            <div className="col-2 mx-3 p-3 d-flex align-items-center">
                <label>{props.label}</label>
            </div>
            <div className="col input-group p-3">
                <input type={props.type} id={props.id} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>
        </div>
    );
};

export default Input;