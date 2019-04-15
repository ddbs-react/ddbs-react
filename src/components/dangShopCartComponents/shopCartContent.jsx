import React from "react"
import "../../assets/css/shopCartContent.css"
import ShopCartLoginAlert from "./shopCartLoginAlert";
import ShopCartShopList from "./shopCartShopList";
import ShopCartMaybeLike from "./shopCartMaybeLike";

export default class ShopCartContent extends React.Component {


    render(){
        return(
            <div className="dangShopCartContent">
                <ShopCartLoginAlert/>
                <ShopCartShopList/>
                <ShopCartMaybeLike/>
            </div>
        );
    }

}