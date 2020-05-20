import React from 'react';
import Input from './Input.js';

const AzureForm = () => {
    return (
        <div className = "Azure-form" >
            <Input label="Client Email" id="client-email" type="emial"/>
            <Input label="Client ID" id="client-id" type="text"/>
            <Input label="Auth URI" id="auth-uri" type="text"/>
            <Input label="Private Key" id="private-key" type="text"/>
            <Input label="Private Key ID" id="private-key-id" type="text"/>
            <Input label="Token URI" id="token-uri" type="text"/>
            <Input label="Type" id="g-type" type="text"/>
            <button>Sign In</button>

        </div>
    );
}

export default AzureForm;