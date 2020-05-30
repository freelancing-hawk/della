import React from 'react';
import Input from './Input.js';
import ReactDOM from 'react-dom';

const AwsForm = () => {
    return (
        <div>
            <div className="Aws-form row px-5 pt-5 text-secondary">
                <h3>AWS</h3>
            </div>
            <div class="row px-3 bg-white border border-secondry">
                <Input label="AWS Access Key" id="aws-access-key" type="text" />
                <Input label="AWS Secret Key" id="aws-secret-key" type="text" />
                <div className="row mx-3 w-100 d-flex jusitfy-content-center ">
                    <div className="col  p-3">
                        <button className="btn btn-primary" onClick={changeDom}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const changeDom = () => {
    //ReactDOM.render(<App />, document.getElementById('root'));
}

export default AwsForm;