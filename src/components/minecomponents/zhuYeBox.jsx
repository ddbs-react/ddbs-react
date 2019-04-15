import React,{Component} from "react"
import DangDangYunTitle from '../commonalitycomponents/dangDangYunTitle';
import ZhuYeItem from './zhuYeItem';
import BookPingItem from './bookPingItem';



export default class ZhuYeBox extends Component {
    constructor(props){
        super(props);
       
    }
      render(){
          return ( <div className="dangDangYun myZhuYe">
                       <DangDangYunTitle/>
                        <ul className="guanZhuList zhuYeList">
                            <li>
                                <i className="iconfont iconmessage_light"></i>
                                <span>我的书单</span>
                            </li>
                            <li>
                                <i className="iconfont iconshu"></i>
                                <span>我的书评</span>
                            </li>
                            <li>
                                <i className="iconfont icondaipingjia"></i>
                                <span>商品问答</span>
                            </li>
                        </ul>
                        <ul className="bookPingList">   
                        {
                            this.props.data.map((b,bid)=>{
                                return <BookPingItem data={b} key={bid}/>       
                            })
                        }                                                                                                     
                        </ul>
                    </div>)
          }

}