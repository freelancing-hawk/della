import React from 'react';
import "./main-page.css"
import Table from "../components/Table";
import Card from "../components/Card";
import MainPopup from "../components/Popup";
import CardNew from "../components/CardNew";

const MainPage = () => {
    return (<div className="row">
        <div className="col-md-12">
            <nav>
                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Cloud Login</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Details</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Billing</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Monitor</a>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane d-inline-flex fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    {/* <Card/> */}
                    <CardNew/>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <h2>AWS</h2>
                    <Table/>
                    <h2>Azure</h2>
                    <Table/>
                    <h2>Google Cloud</h2>
                    <Table/>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <MainPopup showPopup="true"/>
                </div>
            </div>
        </div>
    </div>
    )
};

export default MainPage;