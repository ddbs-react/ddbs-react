import React from "react"
import "../../assets/css/shopListTitle.css"
import dangdanglogo from "../../assets/img/dangdanglogo.png"
export default class ShopListTitle extends React.Component {


    render(){
        return(
            <div className="shopListTitle">
                <div className="shopSelected"></div>
                <img className="dangdangLogo" src={dangdanglogo} alt=""/>
                <h3 className="listTitleMain">当当电子书</h3>
            </div>
        );
    }

}