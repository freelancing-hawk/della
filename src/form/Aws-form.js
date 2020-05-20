import React from 'react';
import Input from './Input.js';
import ReactDOM from 'react-dom';

const AwsForm = () => {
    return (
        <div className = "google-form" >
            <Input label="AWS Access Key" id="aws-access-key" type="text"/>
            <Input label="AWS Secret Key" id="aws-secret-key" type="text"/>
            <button onClick={changeDom}>Sign In</button>
        </div>
    );
}

const changeDom = () =>{
    //ReactDOM.render(<App />, document.getElementById('root'));
}

export default AwsForm;