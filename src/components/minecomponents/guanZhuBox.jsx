import React,{Component} from "react"
import DangDangYunTitle from '../commonalitycomponents/dangDangYunTitle';



export default class GuanZhuBox extends Component {

      render(){
          return ( <div className="dangDangYun">
                        <DangDangYunTitle/>
                        <ul className="guanZhuList">
                            <li>
                                <i className="iconfont iconshoucang"></i>
                                <span>收藏商品</span>
                            </li>  
                            <li>
                                <i className="iconfont icondianpu"></i>
                                <span>关注店铺</span>
                            </li>
                            <li>
                                <i className="iconfont iconliulanjilu"></i>
                                <span>浏览历史</span>
                            </li>
                            <li>
                                <i className="iconfont iconxin"></i>
                                <span>内容收藏</span>
                            </li>
                        </ul>
                 </div>)
          }

}