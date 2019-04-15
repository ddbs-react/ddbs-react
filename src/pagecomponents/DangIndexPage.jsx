import React, { Component } from 'react';
import  DangIndexheader from "../components/indexcomponents/DangIndexHeader"
import DangIndexCen from "../components/indexcomponents/DangIndexCen"
import AllPageFootBox from "../components/commonalitycomponents/allPageFootBox"
import Loading from "../components/commonalitycomponents/loding"
import "../assets/css/dangIndexPage.css"
import "../assets/css/AllPageFoot.css"
import store from "../store/index"
export default class DangIndexPage extends Component {
    constructor(props) {
        super(props);
        //初始化的状态
        this.state= {
            data: "null"
        }
    }
    componentWillMount() {
        function getData() {
            return fetch('http://10.35.167.87:3000/getgds')
            .then(function (response) {
                //console.log(response);
                //promise对象返回
                console.log("开始接收")
                return response.json();
            })
        }
        getData().then(function(data){
            return data;
        }).then((data)=>{
            this.setState({
                data:data,
            })
            console.log("数据收到")
        })
    }

    render() {
            const bodyStyle={
                body:{
                    "width":"100%",
                    "height": "100%",
                    "display":"flex",
                    flexDirection: "column"
                }
            }
                if(this.state.data=="null"){
                        return <Loading></Loading>
                }else{
                    console.log(this.state.data)
                    return(
                        <div style={bodyStyle.body}>
                            <DangIndexheader/>
                            <DangIndexCen data={this.state.data}/>
                            <AllPageFootBox/>
                        </div>
                    )
                }
        }
}