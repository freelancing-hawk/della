import React from 'react';
import Input from './Input.js';
import ReactDOM from 'react-dom';
import AwsForm from './Aws-form';

const GoogleForm = () => {
    return (
        <div className = "google-form" >
            <Input label="Client Email" id="client-email" type="emial"/>
            <Input label="Client ID" id="client-id" type="text"/>
            <Input label="Auth URI" id="auth-uri" type="text"/>
            <Input label="Private Key" id="private-key" type="text"/>
            <Input label="Private Key ID" id="private-key-id" type="text"/>
            <Input label="Token URI" id="token-uri" type="text"/>
            <Input label="Type" id="g-type" type="text"/>
            <button onClick={changeDom}>Sign In</button>
        </div>
    );
}

const changeDom = () =>{
    console.log('clicked');
    ReactDOM.render(<AwsForm />, document.getElementById('root'));
}

export default GoogleForm;