import React, { Component } from 'react';


export default class DangGoodsDetailInformation extends Component {
    render() {
        return (
            <div className="dangGoodsDetailInformation">
                <div className="dangGoodsDetailInformationBox">
                    <div className="dangGoodsDetailInformationTitle">
                        <h3>图书信息</h3>
                    </div>
                    <div className="dangGoodsDetailInformationCon">
                        <p>出版时间:2018年12月</p>
                        <p>ISBN:9787201132617</p>
                        <p>字数:29.5万字</p>
                        <p>大小:4.5M</p>
                        <p>声明:此类商品不支持退换</p>
                    </div>
                </div>
            </div>
        );
    }
}


