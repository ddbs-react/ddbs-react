import React from "react"
import "../../assets/css/denglu.css"

export default class DengLuFooter extends React.Component {


    render(){
        return(
            <div className="dangDengluFooter">
                <div className="footerA">
                    <i className="iconfont icon-qq"></i>
                    <i className="iconfont icon-zhifubao"></i>
                    <i className="iconfont icon-qq"></i>
                    <i className="iconfont icon-weixin"></i>
                </div>

                <div className="footerB">
                    <span>安全问题</span>
                </div>
            </div>
        );
    }
}