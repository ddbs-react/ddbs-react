import React from "react"
import "../../assets/css/maybeLikeList.css"
import MaybeLikeProduct from "./maybeLikeProduct";

export default class MaybeLikeList extends React.Component {


    render(){
        return(
            <div className="maybeLikeList">
                <MaybeLikeProduct/>
                <MaybeLikeProduct/>
                <MaybeLikeProduct/>
                <MaybeLikeProduct/>
                <MaybeLikeProduct/>
                <MaybeLikeProduct/>
                <MaybeLikeProduct/>
                <MaybeLikeProduct/>
            </div>
        );
    }

}