import React, { Component } from 'react';
import DangGoodsdetailHeader from "../components/goodsdetailcomponents/dangGoodsdetailHeader"
import DangGoodsdetailProduct from "../components/goodsdetailcomponents/dangGoodsdetailProduct"
import DangGoodsDetailBanner from  "../components/goodsdetailcomponents/dangGoodsDetailBanner"
import DangGoodsDetailNav from "../components/goodsdetailcomponents/dangGoodsDetailNav"
import DangGoodsDetailRecommend from "../components/goodsdetailcomponents/dangGoodsDetailRecommend"
import DangGoodsDetailNavePlain from "../components/goodsdetailcomponents/dangGoodsDetailNavePlain"
import DangGoodsDetailInformation from "../components/goodsdetailcomponents/dangGoodsDetailInformation"
import DangGoodsDetailFooter from "../components/goodsdetailcomponents/dangGoodsDetailFooter"
import Loading from "../components/commonalitycomponents/loding"
import "../assets/css/dangGoodsDetail.css"

export default class DangGoodsDetailHome extends Component {
    constructor(porps){
        super(porps)
        this.state={
            id:this.props.location.search.substr(4),
            data:"null"
        }
    }
    componentWillMount() {
        let canshu=this.state.id;
        console.log(canshu)
        function getData() {
            return fetch(`http://10.35.167.87:3000/getDetails/?goodsId=${canshu}`)
                .then(function (response) {
                    //console.log(response);
                    //promise对象返回
                    return response.json();
                })
        }
        getData().then(function(data){
            return data;
        }).then((data)=>{
            this.setState({
                data:data.results,
            })
        }).then((data)=>{
            console.log(this.state.data)
        })
    }

    render() {
        if(this.state.data==="null"){
            return  <Loading></Loading>
        }else{
            console.log(this.state.data)
            return (
                <div>
                    <DangGoodsdetailHeader></DangGoodsdetailHeader>
                    <DangGoodsdetailProduct></DangGoodsdetailProduct>
                    <DangGoodsDetailBanner></DangGoodsDetailBanner>
                    <DangGoodsDetailNav></DangGoodsDetailNav>
                    <DangGoodsDetailNavePlain></DangGoodsDetailNavePlain>
                    <DangGoodsDetailRecommend></DangGoodsDetailRecommend>
                    <DangGoodsDetailInformation></DangGoodsDetailInformation>
                    <DangGoodsDetailFooter></DangGoodsDetailFooter>
                </div>
            );
        }

    }
}

