import React from "react"
import one from "../../assets/img/1.png"
import two from "../../assets/img/2.png"
export default class DangOrderSec extends React.Component {

    render() {
        return (
            <div className="dangOrderSection">
            <div className="section-top">
                <div className="sec-top-box">
                    <img className="section-top-img1" src={one} alt=""/>
                    <p className="earth">流浪地球</p>
                </div>
                <span className="over">已完成</span>
            </div>
            <div className="section-down">
                <div className="sec-down-left">
                    <img src={two} alt=""/>
                </div>
                <div className="sec-down-right">
                    <p>影院:<span>奥斯卡中国巨幕国际电影(唐延路店)</span></p>
                    <p>场次:<span>2019-02-16 19:15</span></p>
                    <p>数量:<span>2张</span></p>
                    <p>总价:<span>￥112.4</span></p>
                    <p id="discuss">写影评</p>
                </div>
            </div>
        </div>
        );
    }

}