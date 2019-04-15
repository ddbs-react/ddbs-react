import React from "react"
import "../../assets/css/footer.css"
import {Link} from "react-router-dom";
export default class Footer extends React.Component {


    render(){
        return(
            <div className="footer">
                <Link to={"/"}>
                    <div className="footerHome">
                        <i className="iconfont iconxiazai45"></i>
                        <span>首页</span>
                    </div>
                </Link>
                <Link to={"/DangFeiLei"}>
                    <div className="footerClasses">
                        <i className="iconfont iconfenlei"></i>
                        <span>分类</span>
                    </div>
                </Link>
                <Link to={"/Recommend"}>
                    <div className="footerDiscover">
                        <i className="iconfont iconfaxian"></i>
                        <span>发现</span>
                    </div>
                </Link>
                <Link to={"/cart"}>
                    <div className="footerShopCart">
                        <i className="iconfont icongouwuche"></i>
                        <span>购物车</span>
                        <div className="footerProductNum">2</div>
                    </div>
                </Link>
                <Link to={"/mine"}>
                    <div className="footerMyself">
                        <i className="iconfont iconMy"></i>
                        <span>我的</span>
                    </div>
                </Link>
            </div>
        );
    }

}