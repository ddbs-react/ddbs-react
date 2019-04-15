import React from "react";
import "../../assets/css/header.css";
import houzi from'../../assets/img/houzi.png';

export default class DangdangRecommendHeader extends React.Component {

    render(){
        return(
            <div className="DangdangRecommendHeader">
                <div className="DangdangRecommendHeaderSmall">
                    <div className="DangdangRecommendHeaderPerson">
                        <a href="#">
                            <img src={houzi} alt=""/>
                        </a>
                    </div>
                    <div className="DangdangRecommendHeaderMenu">
                        <ul className="DangdangRecommendHeaderMenu-Ul">
                            <li><a href="javascript:;">推荐</a></li>
                            <li><a href="javascript:;">领劵</a></li>
                            <li><a href="javascript:;">书单</a></li>
                            <li><a href="javascript:;">好评</a></li>
                        </ul>
                    </div>
                    <div className="DangdangRecommendHeader-Down">
                        <a href="javascript:;"><i className="iconfont icon-xia"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}