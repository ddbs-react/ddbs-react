import React,{ Component } from "react"
import {Link} from "react-router-dom"
export default class AllPageFootCon extends Component{
    render(){
        return(
            <div className="allPageFootBox">
                <Link to={"/"}>
                    <div className="allPageFootChldrenBox">
                        <div className="allPageFootChldrenBoxPic">
                            <span className="iconfont iconxiazai45"></span>
                        </div>
                        <p className="allPageFootChldrenBoxName">首页</p>
                    </div>
                </Link>
                {/*DangFeiLei*/}
                <Link to={"/DangFeiLei"}>
                    <div className="allPageFootChldrenBox">
                        <div className="allPageFootChldrenBoxPic">
                            <span className="iconfont iconfenlei"></span>
                        </div>
                        <p className="allPageFootChldrenBoxName">分类</p>
                    </div>
                </Link>
                <Link to={"/Recommend"}>
                    <div className="allPageFootChldrenBox">
                        <div className="allPageFootChldrenBoxPic">
                            <span className="iconfont iconfaxian"></span>
                        </div>
                        <p className="allPageFootChldrenBoxName">发现</p>
                    </div>
                </Link>
                <Link to={"/cart"}>
                    <div className="allPageFootChldrenBox">
                        <div className="allPageFootChldrenBoxPic">
                            <span className="iconfont icongouwuche"></span>
                        </div>
                        <p className="allPageFootChldrenBoxName">购物车</p>
                    </div>
                </Link>
                <Link to={"/mine"}>
                    <div className="allPageFootChldrenBox">
                        <div className="allPageFootChldrenBoxPic">
                            <span className="iconfont iconMy"></span>
                        </div>
                        <p className="allPageFootChldrenBoxName">我的</p>
                    </div>
                </Link>
            </div>
        )
    }
}