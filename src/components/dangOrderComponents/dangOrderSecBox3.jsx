import React from "react"
import DangOrderSec from "./dangOrderSec";

export default class dangOrderSecBox extends React.Component {

    render() {
        return (
            <div className="dangOrderSec box4"> 
                <DangOrderSec/> 
                <DangOrderSec/>
                <DangOrderSec/>
                <DangOrderSec/>
            </div>
        );
    }

}