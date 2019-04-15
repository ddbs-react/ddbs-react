import React from "react"
import "../../assets/css/denglu.css"
import fanhui from "../../assets/img/fanhui.png"
import {Link} from "react-router-dom"


export default class DengLuHeader extends React.Component {


    render(){
        return(
            <div className="dangDengluHeader">
                <Link to={"/"}>
                     <img className="dengluFanhui" src={fanhui} alt=""/>
                </Link>
            </div>
        );
    }
}