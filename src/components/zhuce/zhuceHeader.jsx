import React from "react"
import "../../assets/css/zhuce.css"
import fanhui from "../../assets/img/fanhui.png"
import {Link} from "react-router-dom"

export default class ZhuCeHeader extends React.Component {


    render(){
        return(
            <div className="dangzhuceHeader">
                <Link to={"/login"}>
                    <img className="zhuceFanhui" src={fanhui} alt=""/>
                </Link>
            </div>
        );
    }
}