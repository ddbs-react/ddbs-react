import React, { Component } from 'react';
import  DangGoodsDetailRecommendHeader from "./dangGoodsDetailRecommendHeader"
import DangGoodsDetailRecommendConCommon from "./dangGoodsDetailRecommendConCommon"
export default class DangGoodsDetailRecommend extends Component {
    render() {
        return (
            <div className="dangGoodsDetailRecommend">
                <div className="dangGoodsDetailRecommendBox">
                    <DangGoodsDetailRecommendHeader></DangGoodsDetailRecommendHeader>
                    <DangGoodsDetailRecommendConCommon></DangGoodsDetailRecommendConCommon>


                </div>

            </div>
        );
    }
}

