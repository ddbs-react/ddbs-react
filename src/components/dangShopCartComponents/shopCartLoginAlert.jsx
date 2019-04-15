import React from "react"
import "../../assets/css/shopCartLoginAlert.css"

export default class ShopCartLoginAlert extends React.Component {


    render(){
        return(
            <div className="alertLogin">
                <span className="loginMsg">登录后同步电脑与手机购物车中的商品</span>
                <button className="login">登录</button>
            </div>
        );
    }

}