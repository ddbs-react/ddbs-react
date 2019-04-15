import React from "react"
import {BrowserRouter,Route,Link} from "react-router-dom"

export default class PayList extends React.Component {

    render(){
        return (<ul className="payList">
                   <li>
                        <i className="iconfont icondaifukuan"></i>
                        <span>待付款</span>
                    </li>
                    <li>
                    <i className="iconfont icondaishouhuo"></i>
                        <span>待收货</span>
                    </li>
                    <li>
                    <i className="iconfont icondaipingjia"></i>
                        <span>待评价</span>
                    </li>
                    <li>
                    <i className="iconfont icontuikuan"></i>
                        <span>退款/售后</span>
                    </li>
                    <li>
                        <Link to={"/DangOrder"}>
                            <i className="iconfont iconshuben"></i>
                            <span>全部订单</span>
                        </Link>
                    </li>
                </ul>)
            }
}