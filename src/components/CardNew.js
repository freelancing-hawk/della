import React from "react";
import "./Card.css";
import AWS from "../img/aws.jpg";
import SVG from "./icon.svg";

const CardNew = () => {
    return (
        <div className="mt-4 border card-style rounded p-3">
            <div className="row border-bottom border-dark mx-2 pb-2">
                <div className="col account">
                    {/* <h4 className="row">
                        <span>
                        <img src="./aws.jpg"/>
                        </span>
                    </h4> */}
                    <a href="#"><img src={AWS} alt="AWS Cloud Computing"/></a>
                    <a className="row align-self-center">XXXXXXXXXXX</a>
                </div>
                <div className="col">
                    <h4 className="row justify-content-end">$120</h4>
                    <a className="row budget justify-content-end">Budget this month</a>
                </div>
            </div>
            <div className="row mt-2 px-3 justify-content-between">
                <div className="col-3">
                    <a className="row justify-content-center">EC2</a>
                    <a className="row custom-text justify-content-center">XXXXXXXX</a>
                </div>
                <div className="col-3">
                    <a className="row justify-content-center">S3</a>
                    <a className="row custom-text justify-content-center">XXXXXXXX</a>
                </div>
                <div className="col-3">
                    <a className="row justify-content-center">
                    <img src={SVG} alt="AWS Cloud Computing"/>
                     RDS</a>
                    <a className="row custom-text justify-content-center">XXXXXXXX</a>
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

export default CardNew;