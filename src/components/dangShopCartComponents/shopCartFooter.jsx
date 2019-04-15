import React from "react"
import "../../assets/css/shopCartFooter.css"
import PayMoney from "./payMoney";
import Footer from "./footer";
export default class ShopCartFooter extends React.Component {


    render(){
        return(
            <div className="shopCartFooter">
                <PayMoney/>
                <Footer/>
            </div>
        );
    }

}