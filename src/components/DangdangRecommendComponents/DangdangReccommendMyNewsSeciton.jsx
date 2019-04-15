import React from "react";
import "../../assets/css/MyNewsSectiom.css";
import fangzi from'../../assets/img/fangzi.png';

export default class DangdangReccommendMyNewsSeciton extends React.Component {

    render(){
        return(
            <div className="DangdangRecommendContentSection">
                <div className="DangdangRecommendContentSectionBoxone">
                    <div className="DangdangReccommendMyNewsSeciton">
                        <div className="DangdangReccommendMyNewsSeciton-left">
                            <img className="DangdangReccommendMyNewsSeciton-left-image" src={fangzi} alt=""/>
                        </div>
                        <div className="DangdangReccommendMyNewsSeciton-right">
                            <p className="DangdangReccommendMyNewsSeciton-right-p">“单身女性买房激增”：一个人的终极安全感，源于这三种能力</p>
                            <div className="DangdangReccommendMyNewsSeciton-right-tall">
                                <div className="DangdangReccommendMyNewsSeciton-right-tall-pingjia">
                                    <i className="iconfont iconshoucang"></i>
                                    <span className="DangdangReccommendMyNewsSeciton-right-tall-pingjia-span">213</span>
                                </div>
                                <div className="DangdangReccommendMyNewsSeciton-right-tall-pingjia mt">
                                    <i className="iconfont icondaipingjia"></i>
                                    <span className="DangdangReccommendMyNewsSeciton-right-tall-pingjia-span">13</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}