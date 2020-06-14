import React from "react";
import "./Card.css";

const Card = () => {
    return (
        <div className="flex mt-2 p-2 border w-50">
            <div className="row">
                <h5 className="ml-2 col">AWS</h5>
                <a className="d-flex order-5 col align-self-center">XXXXXXXXXXX</a>
            </div>
            <div className="row d-flex justify-content-around">
                <div className="pl-1 col-2 order-3 border border-dark budget-month">$120</div>

                <div className="pl-1 col-2 order-6 border border-dark bg-white">$120</div>
            </div>
            <div className="d-flex row justify-content-around">
                <div className="ml-3 col-6 order-3 text-dark">this month</div>
                <div className="col-4 order-6 text-dark">Budget</div>
            </div>
            <div className="px-4 row d-flex justify-content-around">
                <div className="pl-1 col-2 order-3 bg-primary">10</div>
                <div className="col-2 order-6 bg-primary">3gb</div>
                <div className="col-2 order-9 bg-primary">2</div>
            </div>
            <div className="d-flex row justify-content-around">
                <div className="ml-3 col-2 order-3 text-dark">EC2</div>
                <div className="col-2 order-6 text-dark">S3</div>
                <div className="px-0 col-2 order-9 text-dark">RDS</div>
            </div>
        </div>

    );
}

export default Card;