import React, { Component } from 'react';


export default class DangGoodsDetailBanner extends Component {
    render() {
        return (
            <div className="dangGoodsDetailBanner">
                <div className="dangGoodsDetailBannerBox">
                    <div className="dangGoodsDetailBannerCon">
                        <div className="dangGoodsDetailBannerImg">
                            <img src={require("../../assets/img/dang-product-banner-one.png")} alt=""/>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="dangGoodsDetailBannerCon">
                        <div className="dangGoodsDetailBannerLimit">
                            <img src={require("../../assets/img/dang-product-limittime.png")} alt=""/>
                        </div>
                        <div className="dangGoodsDetailBannerLimit">
                            <p>商品限时抢购中，剩余</p><span>0天</span><span>15小时</span><span>10分</span><span>30秒</span>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="dangGoodsDetailBannerExamine">
                        <div className="dangGoodsDetailBannerExamineP">
                            <p>查看对应纸书</p>
                        </div>
                        <div className="dangGoodsDetailBannerExamineSpan">
                            <span>￥37.40</span>
                            <i className="iconfont iconyouxiang"></i>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


