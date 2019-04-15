import React from "react";
import "../../assets/css/DangFeiLei.css";
// import img1 from "../../assets/img/fl1.jpg";

export default class FeiLeiRightCon1 extends React.Component{
    render(){
        return(
        <div className="flbigImg">
            <img src={require("../../assets/img/fl1.jpg")} alt=""/>
        </div>
        );
    }
}