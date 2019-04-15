import React from "react"
export default class DangOrderHeader extends React.Component {


    render() {
        return (
            <div className="dangOrderHeader">
                <p className="header-me">我的订单</p>
                <ul id="header-ul">
                    <li className="active">
                        <span>全部</span>
                        <div className="header-line all"></div>
                    </li>
                    <li className="active">
                        <span>待付款</span>
                        <div className="header-line"></div>
                    </li>
                    <li className="active">
                        <span>待使用</span>
                        <div className="header-line"></div>
                    </li>
                    <li className="active">
                        <span>待评价</span>
                        <div className="header-line"></div>
                    </li>
                    <li className="active">
                        <span>退款/售后</span>
                        <div className="header-line"></div>
                    </li>
                </ul>
            </div>
        );
    }

}