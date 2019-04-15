import React from "react"
import "../../assets/css/maybeLikeTitle.css"

export default class MaybeLikeTitle extends React.Component {


    render(){
        return(
            <div className="maybeLikeTitle">
                <i className="iconfont iconxin"></i>
                <h3>根据您的偏好猜您可能喜欢</h3>
            </div>
        );
    }

}