import React from "react";
import ReactDOM from "react-dom"
import "../../assets/css/DangFeiLei.css";
import FeiLeiLeftLi1 from "./FeiLeiLeftLi1";
export default class FeiLeiLeft extends React.Component{
    componentDidMount() {
        console.log("事件绑定上了")
        document.getElementById("flNavUls").onclick=function(event){
            let spanList=document.getElementsByClassName("flNavSpan")
            for (let i=0;i<spanList.length-1;i++){
                ReactDOM.findDOMNode(spanList[i]).style.backgroundColor="#fff"
                ReactDOM.findDOMNode(spanList[i]).style.color="#000"
            }
            let evt=event || window.event
            if(evt.target.tagName==="SPAN"){
                evt.target.style.cssText=`
                    background-color:transparent;
                    color:red;
                `
            }
        }
    }

    componentWillUnmount() {
        document.getElementById("flNavUls").onclick=null
        console.log("事件卸载了")
    }

    render(){
        return(
        <div className="flNav">
            <ul className="flNavUl" id="flNavUls">
                <FeiLeiLeftLi1 />
                <FeiLeiLeftLi1/>
                <FeiLeiLeftLi1/>
                <FeiLeiLeftLi1/>
                <FeiLeiLeftLi1/>
                <FeiLeiLeftLi1/>
                <FeiLeiLeftLi1/>
                <FeiLeiLeftLi1/>
                <FeiLeiLeftLi1/>
                <FeiLeiLeftLi1/>
                <FeiLeiLeftLi1/>
            </ul>
        </div>
        );
    }
}