import React from "react"
import "../../assets/css/shopCartMaybeLike.css"
import MaybeLikeTitle from "./maybeLikeTitle";
import MaybeLikeList from "./maybeLikeList";


export default class ShopCartMaybeLike extends React.Component {


    render(){
        return(
            <div className="shopCartMaybeLike">
                <MaybeLikeTitle/>
                <MaybeLikeList/>
            </div>
        );
    }

}