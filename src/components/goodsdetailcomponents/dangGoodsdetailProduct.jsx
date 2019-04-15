import React, { Component } from 'react';



export default class DangGoodsdetailProduct extends Component {
    render() {
        return (
            <div className="dangGoodsDetailProduct">
                <div className="dangGoodsDetailProductBox">
                    <div className="dangGoodsDetailProductLeft">
                        <img src={require("../../assets/img/dang-product.png")} alt=""/>
                    </div>
                    <div className="dangGoodsDetailProductCenter">
                        <div className="dangGoodsDetailProductDes">
                            <p>啼笑因缘（畅销300万册的国民读本，刘德华、李敬泽作序。繁体版面世即进入台湾诚品、博客来畅销榜单）</p>
                            <span>
                               电子书
                           </span>
                        </div>
                        <div className="dangGoodsDetailProductAuthor">
                            <h5>张恨水</h5>
                        </div>
                        <div className="dangGoodsDetailProductDiscuss">
                            <div className="dangGoodsDetailProductFivestar">
                                <i className="iconfont iconxingxing"></i>
                                <i className="iconfont iconxingxing"></i>
                                <i className="iconfont iconxingxing"></i>
                                <i className="iconfont iconxingxing"></i>
                                <i className="iconfont iconxingxing"></i>
                            </div>
                            <span>
                                8.0
                            </span>
                            <p>718人在读</p>
                        </div>
                        <div className="dangGoodsDetailProductPrice">
                            <h6>￥</h6>
                            <span>1.99</span>
                            <p>原价4.99</p>
                        </div>
                    </div>
                </div>
                <div className="dangGoodsDetailProductSmallicon">
                    <div className="dangGoodsDetailProductSmalliconCommon">
                        <i className="iconfont icondaipingjia"></i>
                        <p>评论</p>
                    </div>
                    <div className="dangGoodsDetailProductSmalliconCommon">
                        <i className="iconfont iconxin"></i>
                        <p>收藏</p>
                    </div>
                    <div className="dangGoodsDetailProductSmalliconCommon">
                        <i className="iconfont iconfenxiang"></i>
                        <p>分享</p>
                    </div>
                </div>
            </div>
        );
    }
}
