import React from "react";
import "../../assets/css/DangFeiLei.css";

export default class FeiLeiRightCon3 extends React.Component{
    render(){
        return(
            <div className="flBang">
            <div className="BangCen">
                <div className="flBangDanTit">
                    <h3 className="BangDanH3">榜单</h3>
                </div>
                <div className="BangDanCen">
                    <ul className="BangDanUl">
                        <li className="BangDanLi">
                            <img src={require("../../assets/img/fl1-1.jpg")} alt="" className="BangImg"/>
                            <span className="BangDanSpan">总榜</span>
                        </li>
                        <li className="BangDanLi">
                            <img src={require("../../assets/img/fl1-2.jpg")} alt="" className="BangImg"/>
                            <span className="BangDanSpan">新书榜</span>
                        </li>
                        <li className="BangDanLi">
                            <img src={require("../../assets/img/fl1-3.jpg")} alt="" className="BangImg"/>
                            <span className="BangDanSpan">童书榜</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}