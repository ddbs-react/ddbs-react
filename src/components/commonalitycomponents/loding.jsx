import React,{Component} from "react"
import loading from '../../assets/img/load.gif';

export default class Loading extends Component{
    render() {
            let loadingStyle={
                BoxStyle:{
                    "width":"100%",
                    "height":"100%",
                    "position":"relative",
                    "backgroundColor":"#f1f1f1"

                },
                imgStyle:{
                    "width":"1.2rem",
                    "height":"1rem",
                    "position":"absolute",
                    "left":"50%",
                    "top":"50%",
                    "transform":"translateX(-50%) translateY(-50%)"
                }
            }
        return (
            <div style={loadingStyle.BoxStyle}>
                <img style={loadingStyle.imgStyle} src={loading} alt=""/>
            </div>
        )
    }
}