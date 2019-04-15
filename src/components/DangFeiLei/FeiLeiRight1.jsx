import React from "react";
import "../../assets/css/DangFeiLei.css";
import FeiLeiRightCon1 from "./FeiLeiRightCon1";
import FeiLeiRightCon2 from "./FeiLeiRightCon2";
import FeiLeiRightCon3 from "./FeiLeiRightCon3";
import FeiLeiRightCon4 from "./FeiLeiRightCon4";

export default class FeiLeiRight1 extends React.Component{
    render(){
        return(
           <div className="flListri flListRight1">
                <FeiLeiRightCon1/>
                <FeiLeiRightCon2/>
                <FeiLeiRightCon3/>
                <FeiLeiRightCon4/>
                <FeiLeiRightCon4/>
                <FeiLeiRightCon4/>
           </div> 
        );
    }
}