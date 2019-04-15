import React from "react";
import "../../assets/css/DangFeiLei.css";
import FeiLeiLeft from "./FeiLeiLeft";
import FeiLeiRight from "./FeiLeiRight";

export default class FeiLeiConent extends React.Component{
    render(){
        return(
            <div className="flList">
                <FeiLeiLeft/>
                <FeiLeiRight/>
            </div>
        );
    }
}