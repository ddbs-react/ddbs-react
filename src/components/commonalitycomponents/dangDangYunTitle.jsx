import React,{Component} from "react"
import dang from '../../assets/img/dang.jpg';



export default class DangDangYunTitle extends Component {

      render(){
          return (
              <div className="dangDangYunTitle">
                    <img src={dang} alt=""/>
                    <h5>当当云阅读</h5>
                    <i className="iconfont iconyouxiang"></i>
                </div>
          )
          }

}