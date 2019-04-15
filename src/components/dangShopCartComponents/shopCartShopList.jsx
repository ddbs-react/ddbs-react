import React from "react"
import ShopListTitle from "./shopListTitle";
import ShopListProducts from "./shopListProducts";

export default class ShopCartShopList extends React.Component {


    render(){
        return(
            <div className="shopCartShopList">
                <ShopListTitle/>
                <ShopListProducts/>
            </div>
        );
    }

}