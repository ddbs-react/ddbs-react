import React from "react"
import header from '../../assets/img/header.jpeg';
import head02 from '../../assets/img/head02.jpg';
import {BrowserRouter,Route,Link} from "react-router-dom"
export default class BgBoxPhoto extends React.Component {

    render(){
        return (<div className="bgBoxPhoto">
                    <div className="bgBoxLeft">
                        <div className="headImg">
                            <img src={header} alt=""/>
                        </div>
                        <div className="headerText">
                            <div className="textTop">
                                <Link to={"/login"}>
                                    <h3>登录/注册</h3>
                                    <i className="iconfont iconyouxiang"></i>
                                </Link>
                            </div>
                            <div className="textBottom">
                                <p>签到领银铃铛</p>
                                <i className="iconfont iconyouxiang"></i>
                            </div>
                        </div>
                    </div>
                    <div className="bgBoxRight">
                        <div className="rightTop">
                            <a href="#"><i className="iconfont iconsetup_icon"></i></a>
                            <a href="#"><i className="iconfont iconxiaoxi"></i></a>
                        </div>
                        <div className="rightBottom">
                            <img src={head02} alt=""/>
                            <span>会员中心</span>
                            <i className="iconfont iconyouxiang"></i>
                        </div>
                    </div>
              </div>)
    }


}