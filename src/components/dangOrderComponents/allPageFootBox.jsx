import React from "react"
import "../../assets/css/footer.css"
export default class AllPageFootBox extends React.Component {


    render(){
        return(
            <div className="footer">
                <div className="footerHome">
                    <i className="iconfont iconxiazai45"></i>
                    <span>首页</span>
                </div>
                <div className="footerClasses">
                    <i className="iconfont iconfenlei"></i>
                    <span>分类</span>
                </div>
                <div className="footerDiscover">
                    <i className="iconfont iconfaxian"></i>
                    <span>发现</span>
                </div>
                <div className="footerShopCart">
                    <i className="iconfont icongouwuche"></i>
                    <span>购物车</span>
                    <div className="footerProductNum">2</div>
                </div>
                <div className="footerMyself">
                    <i className="iconfont iconMy"></i>
                    <span>我的</span>
                </div>
            </div>
        );
    }

}