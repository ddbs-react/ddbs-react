import React from "react"
import "../../assets/css/shopListProducts.css"
import ProductMain from "./productMain";

export default class ShopListProducts extends React.Component {


    render(){
        return(
            <div className="shopListProducts">
                <ProductMain/>
                <ProductMain/>
            </div>
        );
    }

}