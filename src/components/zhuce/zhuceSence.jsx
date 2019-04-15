import React from "react"
import "../../assets/css/zhuce.css"

export default class ZhuCeSence extends React.Component {
    constructor(porps){
        super(porps)
        this.state={
            data:"",
            okOrfals:""
        }
    }
    //正则判断
    chenge(){
        let UserName=this.refs.phoneNum.value
        if(UserName===""){
            this.setState({
                okOrfals:"用户名不能为空",
            })
            return
        }
        let userNmaes=Number(UserName)
        if(isNaN(userNmaes)){
            this.setState({
                okOrfals:"请输入正确的手机号",
            })
            return
        }else {
            getData().then(function (data) {
                return data;
            }).then((data) => {
                this.setState({
                    data: data.ok,
                })
            }).then(() => {
                if (this.state.data === 1) {
                    this.setState({
                        okOrfals: "此用户名可以使用",
                    })
                } else if (this.state.data === 0) {
                    this.setState({
                        okOrfals: "此用户名已被注册",
                    })
                }
            })
        }
        function getData() {
            return fetch(`http://10.35.167.87:3000/useryz?userName=${UserName}`)
                .then(function (response) {
                    //console.log(response);
                    //promise对象返回
                    return response.json();
                })
        }
    }
    userRag(){
        //提交数据进行注册
        let userName=this.refs.phoneNum.value
        let userPass=this.refs.pass.value
            getData().then(function(data){
                return data;
            }).then((data)=>{
                this.setState({
                    data:data,
                })
            }).then(()=>{
                console.log(this.state.data)
            })
        function getData() {
            return fetch(`http://10.35.167.87:3000/userreg?userName=${userName}&userPass=${userPass}`)
                .then(function (response) {
                    //console.log(response);
                    //promise对象返回
                    return response.json();
                })
        }

    }
    componentWillUnmount() {
        this.userRag=null
        this.chenge=null
        console.log("注册的点击事件被卸载")
    }
    render(){
        let spanStyle={
            okTex:{
                "fontSize":".12rem",
                "color":"red",
                "width":"1.5rem",
            }
        }
        return(
            <div className="dangzhuceSence">
        <h3 className="zhuceSenceH">注册新用户</h3>
        <div className="zhuceSenceOne">
            <i className="iconfont icon-shouji"></i>
            <input className="SenceOneInput" maxLength="11" type="text" placeholder="请输入用户名" ref="phoneNum" onBlur={ this.chenge.bind(this)} />
            <span style={spanStyle.okTex} >{this.state.okOrfals}</span>
        </div>
        <div className="zhuceSenceOne">
            <input className="SenceOneInput" type="password" placeholder="请输入密码" ref="pass"/>
        </div>
        <div className="zhuceSenceTwo">
            <input className="SenceTwoInput" type="submit" value="点击注册" onClick={this.userRag.bind(this)}/>
        </div>
        <div className="zhuceSenceThree">
            <input className="SenceThreeInput" type="checkbox"/>
            <span className="SenceThreeSpan1">同意</span>
            <span className="SenceThreeSpan2">《当当交易条款》</span>
            <span className="SenceThreeSpan1">和</span>
            <span className="SenceThreeSpan2">《当当社区条款》</span>  
        </div>
    </div>
        );
    }
}