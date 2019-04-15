import React, { Component } from 'react';


export default class DangGoodsdetailHeader extends Component {
    render() {
        return (
            <div className="dangGoodsDetailHeader">
                <div className="dangGoodsDetailHeaderBox">
                    <div className="dangGoodsDetailHeaderLeft">
                        <i className="iconfont iconfanhui"></i>
                    </div>
                    <div className="dangGoodsDetailHeaderCenter">
                        <h1>书籍详情</h1>
                    </div>
                    <div className="dangGoodsDetailHeaderRight">
                        <i className="iconfont iconshu"></i>
                        <i className="iconfont icongengduo"></i>
                    </div>
                </div>
            </div>
        );
    }
}
