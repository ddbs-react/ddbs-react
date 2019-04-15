import React from "react"
import "../../assets/css/maybeLikeProduct.css"
import product from "../../assets/img/product.png"

export default class MaybeLikeProduct extends React.Component {


    render(){
        return(
            <div className="maybeLikeProduct">
                <img className="maybeLikeProductPic" src={product} alt=""/>
                <div className="maybeLikeProductDesc">
                    <p>当当优品日式针织睡袋 便携式酒店旅行纯棉睡袋16...</p>
                    <div className="maybeLikeProductType">
                        <span className="ziying">当当自营</span>
                        <span className="xianshiqiang">限时抢</span>
                    </div>
                    <span className="maybeLikeProductMoney">￥169.00</span>
                </div>
            </div>
        );
    }

}