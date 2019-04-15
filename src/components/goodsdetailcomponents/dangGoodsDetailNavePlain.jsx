import React, { Component } from 'react';

export default class DangGoodsDetailNavePlain extends Component {
    render() {
        return (
            <div className="dangGoodsDetailNavePlain ">
                <div className="dangGoodsDetailNavePlainBox">
                    <div className="dangGoodsDetailNavePlainCommon">
                        <div className="dangGoodsDetailNavePlainCon">
                            <div className="dangGoodsDetailNavePlainLeft">
                                <p>作者</p>
                                <span>张恨水</span>
                            </div>
                            <div className="dangGoodsDetailNavePlainRight">
                                <i className="iconfont iconyouxiang"></i>
                            </div>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="dangGoodsDetailNavePlainCommon">
                        <div className="dangGoodsDetailNavePlainCon">
                            <div className="dangGoodsDetailNavePlainLeft">
                                <p>出版</p>
                                <span>华东师范大学</span>
                            </div>
                            <div className="dangGoodsDetailNavePlainRight">
                                <i className="iconfont iconyouxiang"></i>
                            </div>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="dangGoodsDetailNavePlainCommon">
                        <div className="dangGoodsDetailNavePlainCon">
                            <div className="dangGoodsDetailNavePlainLeft">
                                <p>分类</p>
                                <span>出版物>小说>中国近代小说</span>
                            </div>
                            <div className="dangGoodsDetailNavePlainRight">
                                <i className="iconfont iconyouxiang"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

