import React from "react";
import "./Popup.css";
import AwsForm from "./Aws-form";

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                   <AwsForm/> 
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}
class MainPopup extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div className='main-popup'>
                 <button onClick={this.togglePopup.bind(this)}>show popup</button>
                {this.state.showPopup ?
                    <Popup
                        text='Close Me'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
};

export default MainPopup;