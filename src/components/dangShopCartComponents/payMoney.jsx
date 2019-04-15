import React from "react"
import "../../assets/css/payMoney.css"
export default class PayMoney extends React.Component {


    render(){
        return(
            <div className="payMoney">
                <div className="allSelected">
                    <div className="allSelectedBtn"></div>
                    <p>全选</p>
                </div>
                <div className="totalMoney">
                    <span className="totalMoneyWord">合计:</span>
                    <span className="totalMoneyNum">￥3.98</span>
                </div>
                <button className="goPay">去结算(2)</button>
            </div>
        );
    }

}