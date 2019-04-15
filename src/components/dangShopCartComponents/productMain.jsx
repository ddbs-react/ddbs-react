import React from "react"
import "../../assets/css/productMain.css"
import book from "../../assets/img/book.png"
export default class ProductMain extends React.Component {


    render(){
        return(
            <div className="productMain">
                <div className="productSelected"></div>
                <img className="productBook" src={book} alt=""/>
                <div className="productDesc">
                    <span className="productName">希利尔讲世界史</span>
                    <span className="productMoney">￥<b>1</b>.99</span>
                </div>
            </div>
        );
    }

}