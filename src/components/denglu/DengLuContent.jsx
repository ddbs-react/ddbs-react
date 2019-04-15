import React from "react"
import "../../assets/css/denglu.css"
import yzm from "../../assets/img/yzm1.jpg"
import jm from "../../assets/img/yzm2.jpg"
import {Link} from "react-router-dom"

export default class DengLuContent extends React.Component {
    constructor(porps){
        super(porps)
        this.state={
            data:"",
        }
    }
    componentDidMount() {
        this.refs.contentLi.style.borderBottom="1px solid black"
    }
    noteLgin(){
        //短信登陆
        this.refs.nuseLogin.style.display="none"
        this.refs.note.style.display = 'block'
        this.refs.contentLi.style.border="none"
        this.refs.noteStyle.style.borderBottom="1px solid black"
        this.refs.noteStyle.style.color="#3D3D3D"
        this.refs.nuseLogin.style.color="#f1f1f1"
    }
    userName(){
        this.refs.nuseLogin.style.display="block"
        this.refs.note.style.display="none"
        this.refs.contentLi.style.borderBottom="1px solid black"
        this.refs.noteStyle.style.borderBottom="none"
    }
    //登陆验证
    userLogin(){
        let userName=this.refs.userName.value;
        let userPass=this.refs.userPass.value;
        function getData() {
            return fetch(`http://10.35.167.87:3000/userlogin?userName=${userName}&userPass=${userPass}`)
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
                data:data.ok,
            })
        })
    }



    render(){
        let warringText={
            TextStyle:{
                "fontSzie":".12rem",
                "color":"red"
            }
        }
        return(
                <div className="dangDengluContent">
                    <ul className="contentUl">
                        <li className="contentLi" ref="contentLi">
                            <span className="contentLiSpan" onClick={this.userName.bind(this)}>账号密码登陆</span>
                        </li>
                        <li className="contentLi ms" ref="noteStyle">
                            <span className="contentLiSpan" onClick={this.noteLgin.bind(this)}>短信快捷登陆</span>
                        </li>
                    </ul>
                    <div className="contentA" ref="nuseLogin">
                        <div className="contentOne">
                            <i className="iconfont icon-user-o"></i>
                            <input className="contentOneInput" type="text" placeholder="请输入手机号/邮箱/昵称" ref="userName"/>
                            <span style={warringText.TextStyle}>{this.state.data}</span>
                        </div>
                        <div className="contentOne">
                            <i className="iconfont icon-webicon204"></i>
                            <input className="contentOneInput" type="password" placeholder="请输入密码" ref="userPass"/>
                        </div>
                        <div className="contentTwo">
                            <input className="contentTwoInput" type="submit" value="登录" onClick={this.userLogin.bind(this)}/>
                        </div>

                        <div className="contentThree">
                            <a href="#"><span className="contentThreeSpan">忘记密码？</span></a>
                            <Link to={"/reg"}><span className="contentThreeSpan">立即注册</span></Link>
                        </div>
                    </div>
                    <div className="contentB" ref="note">
                        <div className="contentOne">
                            <i className="iconfont icon-shouji"></i>
                            <input className="contentOneInput" type="text" placeholder="请输入手机号"/>
                        </div>
                
                        <div className="contentYzm">
                            <div className="contentYzmOne">
                                <span className="contentYzmOneSpan">请点击图片旋转至正确方向</span>
                                <span className="contentYzmOneSpan" id="contentYzmOneSpan">换一组</span>
                            </div>

                            <div className="contentYzmTwo">
                                <img className="contentYzmImg" src={yzm} alt=""/>
                                <img className="contentYzmImg" src={jm} alt=""/>
                                <img className="contentYzmImg" src={yzm} alt=""/>
                                <img className="contentYzmImg" src={jm} alt=""/>
                            </div>
                        </div>
        
                        <div className="contentTwo">
                            <input className="contentTwoInput" id="contentTwoInput" type="submit" value="获取验证码"/>
                        </div>
        
                        <div className="contentThree">
                            <a href="#"><span className="contentThreeSpan">忘记密码？</span></a>
                        </div>
                </div>
            </div>
        );
    }
}