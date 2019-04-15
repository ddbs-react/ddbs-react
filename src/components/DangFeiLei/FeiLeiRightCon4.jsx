import React from "react";
import "../../assets/css/DangFeiLei.css";

export default class FeiLeiRightCon4 extends React.Component{
    render(){
        return(
            <div className="flBang">
                <div className="BangCen">
                        <div className="flBangDanTit">
                            <div className="FlBangTitLeft">
                                <h3 className="BangDanH3">小说</h3>
                                <i className="iconfont iconyouxiang flyou"></i>
                            </div>
                            <div className="FlBangTitRight">
                                <h3 className="BangDanH3c">畅销榜</h3>
                                <i className="iconfont iconyouxiang flyouc"></i>
                            </div>
                        </div>
                        <div className="BangDanCen">
                            <ul className="BangDanUl1">
                                <li className="BangDanLi">
                                    <a href="#">
                                        <span className="BangDanSpan1">社会</span>
                                    </a>
                                </li>
                                <li className="BangDanLi BangDanLiHot">
                                    <a href="#">
                                        <span className="BangDanSpan1 BangDanSpana">侦探/悬疑/推理</span>
                                        <img src="../img/fl-hot.jpg" alt="" className="flHot"/>
                                    </a>
                                </li>
                                <li className="BangDanLi">
                                    <a href="#">
                                        <span className="BangDanSpan1">情感</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="BangDanUl2">
                                <li className="BangDanLi">
                                    <a href="#">
                                        <span className="BangDanSpan1">世界名著</span>
                                    </a>
                                </li>
                                <li className="BangDanLi">
                                    <a href="#">
                                        <span className="BangDanSpan1">历史</span>
                                    </a>
                                </li>
                                <li className="BangDanLi BangDanLi1">
                                    <a href="#">
                                        <span className="BangDanSpan1">展开</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
             </div>
        );
    }
}