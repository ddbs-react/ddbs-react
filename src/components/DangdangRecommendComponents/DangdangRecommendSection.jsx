import React from "react";
import "../../assets/css/section.css";
import dangdanglogo from '../../assets/img/dangdanglogo.png'
import DangDangbookone from '../../assets/img/DangDangbookone.png'
import DangDangbooktwo from '../../assets/img/DangDangbooktwo.png'
import DangDangbookthree from '../../assets/img/DangDangbookthree.png'
import DangDangbookfour from '../../assets/img/DangDangbookfour.png'

export default class DangdangRecommendSection extends React.Component {

    render(){
        return(
            <div className="DangdangRecommendContentSection">
                <div className="DangdangRecommendContentSectionBox">    
                    <div className="DangdangRecommendContentSectionBox-title">
                        <div className="DangdangRecommendContentSectionBox-left">
                            <div className="DangdangRecommendContentSectionBox-left-img">
                                    <a href="javascript:;"><img src={dangdanglogo} alt=""/></a>
                            </div>
                        </div>
                        <div className="DangdangRecommendContentSectionBox-right">
                            <div className="DangdangRecommendContentSectionBox-right-text">
                                <h3>当当热搜榜</h3>
                                <span>hot</span>
                            </div>
                            <div className="DangdangRecommendContentSectionBox-right-time">
                                <span>18小时前</span>
                            </div>
                        </div>
                    </div>
                    <p className="DangdangRecommendContentSectionBox-left-P">#中级会计职称教材2019#引爆热潮，今日热搜榜单新鲜出炉，快来围观~</p>
                    <div className="DangdangRecommendContent-book">
                        <ul className="DangdangRecommendContent-bookUl">
                            <li>
                                <i className="iconfont icon-shuqian">
                                    <span>1</span>
                                </i>
                                <img src={DangDangbookone} alt=""/>
                            </li>
                            <li>
                                <i className="iconfont icon-shuqian">
                                    <span>2</span>
                                </i>
                                <img src={DangDangbooktwo} alt=""/>
                            </li>
                            <li>
                                <i className="iconfont icon-shuqian">
                                    <span>3</span>
                                </i>
                                <img src={DangDangbookthree} alt=""/>
                            </li>
                            <li>
                                <i className="iconfont icon-shuqian">
                                    <span>4</span>
                                </i>
                                <img src={DangDangbookfour} alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}