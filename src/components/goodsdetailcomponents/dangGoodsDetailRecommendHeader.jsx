import React, { Component } from 'react';


export default class dangGoodsDetailRecommendHeader extends Component {
    render() {
        return (
            <div className="dangGoodsDetailRecommendHeader">
                <div className="dangGoodsDetailRecommendHeaderLeft">
                    <h3>大家都在看</h3>
                </div>
                <div className="dangGoodsDetailRecommendHeaderRight">
                    <p>换一批</p>
                    <i className="iconfont iconrefresh_light"></i>
                </div>
            </div>
        );
    }
}

