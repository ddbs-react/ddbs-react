import React,{Component} from "react"
import DangDangYunTitle from '../commonalitycomponents/dangDangYunTitle';
import ZiDingYiItem from './ziDingYiItem';



export default class ZiDingYiBox extends Component {

      render(){
          return ( <div className="dangDangYun myZhuYe">
                        <DangDangYunTitle/>

                        <ul className="ziDingYiList">
                            <li>
                                <i className="iconfont iconshinshopanquanzhongxin"></i>
                                <span>安全中心</span>
                            </li>  
                            <li>
                                <i className="iconfont iconkefu"></i>
                                <span>客服帮助</span>
                            </li>   
                            <li>
                                <i className="iconfont iconlingquanzhongxin"></i>
                                <span>领券中心</span>
                            </li>  
                            <li>
                                <i className="iconfont iconcuxiao"></i>
                                <span>我的拼团</span>
                            </li>  
                            <li>
                                <i className="iconfont iconMember"></i>
                                <span>我的微博</span>
                            </li>   
                            <li>
                                <i className="iconfont iconshinshopanquanzhongxin"></i>
                                <span>安全中心</span>
                            </li>                     
                        </ul>
                    </div>)
          }

}