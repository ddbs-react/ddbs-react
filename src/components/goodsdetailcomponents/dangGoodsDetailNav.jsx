import React, { Component } from 'react';


export default class DangGoodsDetailNav extends Component {
    render() {
        return (
            <div className="dangGoodsDetailNav">
                <div className="dangGoodsDetailNavBox">
                    <ul className="dangGoodsDetailNavUl">
                        <li>详情</li>
                        <li>目录</li>
                        <li>评论</li>
                    </ul>
                    <div className="dangGoodsDetailNavCommon">
                        <div className="dangGoodsDetailNavTitle">
                            <h3>内容简介</h3>
                        </div>
                        <div className="dangGoodsDetailNavCon">
                            <p>2010年初版至今，百万册畅销纪念版；收录未完绝笔遗作《Goodbye》，附太宰生平年表，追求毁灭美学的太宰治完整代表作11篇集结，《人间失格》《奔跑吧！梅勒斯》《维庸之妻》《斜阳》。果麦出品</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
