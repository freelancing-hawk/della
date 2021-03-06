import React from "react";
import "./Card.css";

const Card = () => {
    return (
        <div className="mt-2 mr-2 border card-style rounded p-3">
            <div className="row">
                <h4 className="col-4">AWS</h4>
                <a className="col align-self-center">XXXXXXXXXXX</a>
            </div>
            <div className="row px-3 justify-content-between">
                <div className="col-4 budget-month">
                    <a>$120</a>
                </div>
                <div className="col-4 budget-month">
                    <a>$120</a>
                </div>
            </div>
            <div className="row px-3 justify-content-between">
                <div className="col-4">
                    <a>this month</a>
                </div>
                <div className="col-4">
                    <a>budget</a>
                </div>
            </div>
            <div className="row px-3 justify-content-between">
                <div className="col-3 bg-primary">
                    <a>10</a>
                </div>
                <div className="col-3 bg-primary">
                    <a>3gb</a>
                </div>
                <div className="col-3 bg-primary">
                    <a>2</a>
                </div>
            </div>
            <div className="row px-3 justify-content-between">
                <div className="col-3">
                    <a>EC2</a>
                </div>
                <div className="col-3">
                    <a>S3</a>
                </div>
                <div className="col-3">
                    <a>RDS</a>
                </div>
            </div>
        </div>
        // <div className="flex mt-2 p-2 border w-50">
        //     <div className="row">
        //         <h5 className="ml-2 col">AWS</h5>
        //         <a className="d-flex order-5 col align-self-center">XXXXXXXXXXX</a>
        //     </div>
        //     <div className="row d-flex justify-content-around">
        //         <div className="pl-1 col-2 order-3 border border-dark budget-month">$120</div>

        //         <div className="pl-1 col-2 order-6 border border-dark bg-white">$120</div>
        //     </div>
        //     <div className="d-flex row justify-content-around">
        //         <div className="ml-3 col-6 order-3 text-dark">this month</div>
        //         <div className="col-4 order-6 text-dark">Budget</div>
        //     </div>
        //     <div className="row d-inline-flex justify-content-between">
        //         <div className="col order-3 bg-primary">
        //             <a>10</a>
        //             </div>
        //         <div className="col order-6 bg-primary">
        //         <a>3gb</a>
        //         </div>
        //         <div className="col order-9 bg-primary">
        //         <a>2</a>
        //         </div>
        //     </div>
        //     <div className="d-flex row justify-content-around">
        //         <div className="ml-3 col-2 order-3 text-dark">EC2</div>
        //         <div className="col-2 order-6 text-dark">S3</div>
        //         <div className="px-0 col-2 order-9 text-dark">RDS</div>
        //     </div>
        // </div>

    );
}

export default Card;