import React from "react"
import "../../assets/css/shopCartHeader.css"
import address from "../../assets/img/address.png"

export default class ShopCartHeader extends React.Component {


    render(){
        return(
            <div className="dangShopCartHeader">
                <div className="dangShopCartHeaderTitle">
                    <h2>购物车</h2>
                    <img className="addressPosition" src={address} alt=""/>
                    <div className="dangShopCartHeaderWrite">
                        <span>编辑</span>
                        <i className="iconfont iconxiaoxi"></i>
                    </div>
                </div>
            </div>
        );
    }

}