import React from "react";
import "../../assets/css/DangFeiLei.css";

export default class FeiLeiHeader extends React.Component{
    render(){
        return(
            <div className="flHeader">
                <div className="flHead">
                    <div className="flHeadLeft">
                        <i className="iconfont iconsaoyisao flsaoyisao"></i>
                    </div>
                    <div className="flHeadCen">
                        <i className="iconfont iconsearch_light flsousuo"></i>
                        <input type="text" placeholder="搜索商品/品牌/种类" className="flHeadInput"/>
                    </div>
                    <div className="flHeadRight">
                       <i className="iconfont iconxiaoxi flXiaoxi"></i>
                    </div>
                </div>
            </div>
        );
    }
}