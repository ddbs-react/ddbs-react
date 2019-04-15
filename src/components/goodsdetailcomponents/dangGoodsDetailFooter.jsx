import React, { Component } from 'react';


export default class DangGoodsDetailFooter extends Component {
    render() {
        return (
            <div className="dangGoodsDetailFooter">
                <div className="dangGoodsDetailFooterBox">
                    <div className="dangGoodsDetailFooterCon">
                        <div className="dangGoodsDetailFooterIcon">
                            <i className="iconfont icongouwuche"></i>
                            <p>购物车</p>
                        </div>
                        <div className="dangGoodsDetailFooterIcon">
                            <i className="iconfont iconlingquanzhongxin"></i>
                            <p>购买</p>
                        </div>
                        <div className="dangGoodsDetailFooterButton">
                            <button>
                                免费试读
                            </button>
                            <button>
                                点击购买
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

