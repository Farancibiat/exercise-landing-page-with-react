import React from "react";
import CardItem from "./carditem";

export const CardField = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3 py-3 mx-auto"><CardItem /></div>
                <div className="col-12 col-sm-6 col-md-3 py-3 mx-auto"><CardItem /></div>
                <div className="col-12 col-sm-6 col-md-3 py-3 mx-auto"><CardItem /></div>
                <div className="col-12 col-sm-6 col-md-3 py-3 mx-auto"><CardItem /></div>
            </div>
        </div>
    );
}

export default CardField;